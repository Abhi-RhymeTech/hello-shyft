import { useState, useEffect } from "react";
import {ReactSession} from 'react-client-session';
// import Navbar from "./Navbar";

const GetDetails = () => {
  const val = ReactSession.get("userw");
  console.log("Value in session: "+val);
  const [apiResponse, setApiResponse] = useState();
  const [name, setName] = useState("Loading");
  const [desc, setDesc] = useState("");
  const [sym, setSym] = useState("");
  const [imgs, setImgs] = useState(
    "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  );
  const [mintAddr, setMintAddr] = useState("");
  const [ownAddr, setOwnAddr] = useState("");
  const [roy, setRoy] = useState();
  const [attrib, setAttrib] = useState("");
  const [tokenParams, setTokenparams] = useState(
    window.location.search.substring(1)
  );

  let getParams = tokenParams.split("&");

  let apiParams = getParams[1].split("=");
  console.log(apiParams[1]);
  let nftUrl =
    "https://api.shyft.to/sol/v1/nft/read?network=devnet&" + getParams[0];
  useEffect(() => {
    fetch(nftUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiParams[1],
      },
      //   body: JSON.stringify({ network: "devnet", token_address: "" }),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the NFT data from server");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.success);
        setApiResponse(JSON.stringify(data.result));
        setName(data.result.name);
        setDesc(data.result.description);
        setImgs(data.result.image_uri);
        setSym(data.result.symbol);
        setSym(data.result.symbol);
        setOwnAddr(data.result.owner);
        setMintAddr(data.result.mint);
        setRoy(data.result.royalty);
        setAttrib(data.result.attributes);
        //console.log(data.result);
      })
      .catch((errs) => {
        console.log(errs.message);
        // setErrorOcc(true);
      });
  }, [nftUrl]);

  return (
    <div>
      <div className="container-lg">
        <div className="w-50 mx-auto text-center p-3 pt-5">
          <img src={imgs} alt="" style={{ width: "200px", height: "200px" }} />
        </div>
        <h2 className="pb-2 text-center">{name}</h2>
        <div className="table-container py-4">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td className="p-3">Description</td>
                <td className="p-3">{desc}</td>
              </tr>
              <tr>
                <td className="p-3">Symbol</td>
                <td className="p-3">{sym}</td>
              </tr>
              <tr>
                <td className="p-3">Royalty</td>
                <td className="p-3">{roy}</td>
              </tr>
              <tr>
                <td className="p-3">Attributes</td>
                <td className="p-3">{JSON.stringify(attrib)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <h4 className="text-center text-info">Response From The Server</h4>
          <textarea
            name="value-fetched"
            className="form-control"
            value={JSON.stringify(apiResponse)}
            cols="30"
            rows="10"
          >
            
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default GetDetails;
