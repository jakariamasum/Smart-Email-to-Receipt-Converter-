import { envConfig } from "@/config/envConfig";
import { DonationData } from "@/types/indes";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const donationData: DonationData = await request.json();

    // Forward the request to the Python backend
    const response = await fetch(`${envConfig.apiUrl}/generate-pdf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donationData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || "Failed to generate PDF" },
        { status: response.status }
      );
    }

    // Get the PDF as a blob
    const pdfBlob = await response.blob();

    // Return the PDF directly
    return new NextResponse(pdfBlob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="donation-receipt-${donationData.transactionId}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
