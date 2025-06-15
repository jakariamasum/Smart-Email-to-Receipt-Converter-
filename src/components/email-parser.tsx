"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, FileDown, AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import DonationPreview from "@/components/donation-preview";
import { parseEmail } from "@/lib/api";
import { DonationData, FormData } from "@/types/indes";

export const EmailParser = () => {
  const [donationData, setDonationData] = useState<DonationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      emailText: "",
    },
  });

  const emailText = watch("emailText");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setPdfUrl(null);
    setSuccess(false);

    try {
      const parsedData = await parseEmail(data.emailText);
      setDonationData(parsedData);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to parse email");
      setDonationData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
        <div className="mb-6">
          <label
            htmlFor="email-text"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Paste Email Text
          </label>
          <Textarea
            id="email-text"
            placeholder="Paste the donation confirmation email text here..."
            className="min-h-[200px]"
            {...register("emailText", {
              required: "Email text is required",
              minLength: {
                value: 50,
                message: "Email text seems too short",
              },
            })}
          />
          {errors.emailText && (
            <p className="mt-1 text-sm text-red-600">
              {errors.emailText.message}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <Button type="submit" disabled={loading || !emailText?.trim()}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Parse Email"
            )}
          </Button>

          {donationData && (
            <Button type="button" disabled={loading} variant="outline">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Receipt"
              )}
            </Button>
          )}

          {pdfUrl && (
            <Button type="button" variant="secondary">
              <FileDown className="mr-2 h-4 w-4" />
              Download Receipt
            </Button>
          )}
        </div>
      </form>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && !error && (
        <Alert variant="success" className="mb-6">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Email parsed successfully!</AlertDescription>
        </Alert>
      )}

      {donationData && (
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Extracted Donation Information
          </h2>
          <DonationPreview data={donationData} />
        </Card>
      )}

      {pdfUrl && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 text-black">
            Receipt Preview
          </h2>
          <div className="border rounded-lg overflow-hidden">
            <iframe
              src={pdfUrl}
              className="w-full h-[600px]"
              title="PDF Receipt Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};
