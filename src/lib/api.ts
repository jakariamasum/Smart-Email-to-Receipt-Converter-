import { envConfig } from "@/config/envConfig";
import { DonationData } from "@/types/indes";

export async function parseEmail(emailText: string): Promise<DonationData> {
  try {
    const response = await fetch(`${envConfig.apiUrl}/parse-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_text: emailText }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to parse email");
    }

    return await response.json();
  } catch (error) {
    console.error("Error parsing email:", error);
    throw error;
  }
}
