import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (
      !process.env.GOOGLE_CLIENT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      throw new Error("Missing Google environment variables");
    }

    const rawKey = process.env.GOOGLE_PRIVATE_KEY;

    // ===== DEBUG LOGS =====
    console.log("Email exists:", !!process.env.GOOGLE_CLIENT_EMAIL);
    console.log("Sheet ID exists:", !!process.env.GOOGLE_SHEET_ID);
    console.log("Key exists:", !!rawKey);
    console.log("Key length:", rawKey?.length);
    console.log("Raw first 40:", JSON.stringify(rawKey?.substring(0, 40)));
    console.log("Raw last 40:", JSON.stringify(rawKey?.substring(rawKey.length - 40)));
    console.log("Contains \\n:", rawKey?.includes("\\n"));
    console.log("Contains real newline:", rawKey?.includes("\n"));
    // ======================

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: rawKey?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString(),
            name,
            phone,
            "Website",
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      {
        status: 500,
      }
    );
  }
}