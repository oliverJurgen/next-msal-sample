import type { NextApiRequest, NextApiResponse } from "next";
import { authenticator } from "otplib";
import qrcode from "qrcode";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const handleGet = () => {
    const dummyUser = "user001@gmail.com";
    const serviceName = "test";
    const tempSecret = authenticator.generateSecret();

    const otpauth = authenticator.keyuri(dummyUser, serviceName, tempSecret);

    qrcode.toDataURL(otpauth, (err: any, imageUrl: string) => {
      if (err) {
        console.log("Error with QR");
        return;
      }
      console.log(imageUrl);

      res.status(200).json({
        qrCode: imageUrl,
        secret: tempSecret,
        // secret:
      });
    });
  };

  switch (method) {
    case "GET":
      // Get data from your database
      // res.status(200).json({ id, name: `User ${id}` });
      handleGet();
      break;
    case "POST":
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
