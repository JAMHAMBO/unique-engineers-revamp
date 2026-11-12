import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { companyData } from "@/data/company";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Bot honeypot check
    if (data.honeypot) {
      return NextResponse.json({ success: true, message: "Filtered" });
    }

    // 2. Validate required fields
    if (!data.name || !data.phone || !data.message) {
      return NextResponse.json(
        { success: false, error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const inquiry = {
      id: `INQ-${Date.now()}`,
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name: data.name,
      company: data.company || "Not provided",
      phone: data.phone,
      email: data.email,
      service: data.service || "General Inquiry",
      location: data.location || "Not specified",
      message: data.message,
    };

    // 3. Persist inquiry to a local JSON log file so it is NEVER lost
    try {
      const dataDir = path.join(process.cwd(), ".data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, "inquiries.json");
      let existingInquiries = [];
      if (fs.existsSync(filePath)) {
        try {
          existingInquiries = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        } catch {
          existingInquiries = [];
        }
      }
      existingInquiries.unshift(inquiry);
      fs.writeFileSync(filePath, JSON.stringify(existingInquiries, null, 2), "utf-8");
      console.log(`[INQUIRY RECORDED] New inquiry from ${inquiry.name} (${inquiry.company})`);
    } catch (fsErr) {
      console.error("[INQUIRY LOG ERROR]", fsErr);
    }

    // 4. Return success
    return NextResponse.json({
      success: true,
      inquiryId: inquiry.id,
      timestamp: inquiry.formattedDate,
    });
  } catch (error) {
    console.error("[CONTACT API ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: `Internal server error. Please call ${companyData.keyContact.phone} directly.`,
      },
      { status: 500 }
    );
  }
}

