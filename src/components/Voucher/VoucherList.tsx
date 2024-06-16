import VoucherCard from "./VoucherCard";

const VouchersList = ({ data }: any) => {
  return (
    <div className="md:mr-20 md:ml-20">
      <div className="drop-shadow-xl">
        {data ? (
          data
            .slice(0)
            .reverse()
            .map((voucher: any, key: any) => {
              return <VoucherCard voucher={voucher} key={key} />;
            })
        ) : (
          <p>No vouchers to show.</p>
        )}
      </div>
    </div>
  );
};

export default VouchersList;
