import React from "react";
import Image, { StaticImageData } from "next/image";
import LogoBitcoin from "../../public/logoBitcoin.svg";
import LogoBCA from "../../public/logoBCA.svg";
import Paragraph from "../shared/typography/paragraph";

const Table = () => {
  return (
    <table className="lg:text-sm lg:leading-5 font-inter text-xs leading-4 text-center mx-auto">
      <thead>
        <tr className="bg-[#2792DF] text-white">
          <th className="p-2 min-w-[160px]">Aset</th>
          <th className="p-2 min-w-[160px]">Harga Beli (2016)</th>
          <th className="p-2 min-w-[160px]">Harga Jual (2020)</th>
          <th className="p-2 min-w-[160px]">Profit (Rp)</th>
          <th className="p-2 min-w-[160px]">Profit (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 min-w-[160px]">
            <Image src={LogoBitcoin} alt={"logo bitcoin"} className="mx-auto" />
          </td>
          <td className="p-2 min-w-[160px]">Rp 12.974.831</td>
          <td className="p-2 min-w-[160px]">Rp 410.410.296</td>
          <td className="p-2 min-w-[160px]">Rp 397.435.465</td>
          <td className="p-2 min-w-[160px]">3.063,13%</td>
        </tr>{" "}
        <tr className="bg-[#F2F5F9]">
          <td className="p-2 min-w-[160px]">
            <Image src={LogoBCA} alt={"logo BCA"} className="mx-auto" />
          </td>
          <td className="p-2 min-w-[160px]"> Rp 16.200.000</td>
          <td className="p-2 min-w-[160px]"> Rp 34.000.000</td>
          <td className="p-2 min-w-[160px]"> Rp 17.800.000</td>
          <td className="p-2 min-w-[160px]"> 109,88%</td>
        </tr>
        <tr>
          <td className="p-2 min-w-[160px]">
            <Image src={LogoBitcoin} alt={"logo bitcoin"} className="mx-auto" />
          </td>
          <td className="p-2 min-w-[160px]">Rp 12.974.831</td>
          <td className="p-2 min-w-[160px]">Rp 410.410.296</td>
          <td className="p-2 min-w-[160px]">Rp 397.435.465</td>
          <td className="p-2 min-w-[160px]">3.063,13%</td>
        </tr>{" "}
        <tr className="bg-[#F2F5F9]">
          <td className="p-2 min-w-[160px]">
            <Image src={LogoBCA} alt={"logo BCA"} className="mx-auto" />
          </td>
          <td className="p-2 min-w-[160px]"> Rp 16.200.000</td>
          <td className="p-2 min-w-[160px]"> Rp 34.000.000</td>
          <td className="p-2 min-w-[160px]"> Rp 17.800.000</td>
          <td className="p-2 min-w-[160px]"> 109,88%</td>
        </tr>
        <tr>
          <td className="p-2 min-w-[160px]">
            <Image src={LogoBitcoin} alt={"logo bitcoin"} className="mx-auto" />
          </td>
          <td className="p-2 min-w-[160px]">Rp 12.974.831</td>
          <td className="p-2 min-w-[160px]">Rp 410.410.296</td>
          <td className="p-2 min-w-[160px]">Rp 397.435.465</td>
          <td className="p-2 min-w-[160px]">3.063,13%</td>
        </tr>{" "}
        <tr className="bg-[#F2F5F9] text-center">
          <td colSpan={5} className="p-2 min-w-[160px]">
            <Paragraph type={"caption"} className="text-[#A9ACAF] font-medium">
              Perbandingan Keuntungan Bitcoin dan Saham
            </Paragraph>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
