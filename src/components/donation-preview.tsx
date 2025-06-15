import { DonationData } from "@/types/indes";

interface DonationPreviewProps {
  data: DonationData;
}

const DonationPreview = ({ data }: DonationPreviewProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Donor Name</h3>
          <p className="text-lg font-medium">{data.donorName}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Amount</h3>
          <p className="text-lg font-medium">{formatCurrency(data.amount)}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Date</h3>
          <p className="text-lg font-medium">{formatDate(data.date)}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
          <p className="text-lg font-medium">{data.paymentMethod}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Transaction ID</h3>
          <p className="text-lg font-medium">{data.transactionId}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Receipt Number</h3>
          <p className="text-lg font-medium">{data.receiptNumber}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Charity Name</h3>
          <p className="text-lg font-medium">{data.charityName}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Charity Number</h3>
          <p className="text-lg font-medium">{data.charityNumber}</p>
        </div>
      </div>
    </div>
  );
};
export default DonationPreview;
