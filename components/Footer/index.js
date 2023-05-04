import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-2">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-3">
            <h1 className="text-xl tablet:text-2xl laptop:text-2xl laptopl:text-2xl text-bold">
              Please use any of them to get in touch with me if you have any questions to me :)
            </h1>
            <h1 className="text-xl tablet:text-2xl laptop:text-2xl laptopl:text-2xl text-bold">
              I am always looking forward to talk to you!
            </h1>
            {/* <Button type="primary">Schedule a call</Button> */}
            <div className="mt-3">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
