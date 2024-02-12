import { useState } from "react";
import ToggleSwitch from "../../../../components/ToggleSwitch";
import FloatingLabelInput from "../../../../components/inputs/FloatingLabelInput";
import { Link } from "react-router-dom";

const Functions = () => {
  const [functions, setFunctions] = useState({
    mint: false,
    burn: false,
    launchMode: false,
    cooldown: false,
    antiWhale: false,
    maxTransaction: false,
    maxWallet: false,
    daoVoting: false,
    taxFees: false,
    marketingFees: false,
    adminFees: false,
    rewards: false,
    liquidityFees: false,
    reflections: false,
    autoBurn: false,
  });
  const [formData, setFormData] = useState({
    mint: "",
    burn: "",
    cooldown_token_percent: "",
    cooldown_minutes: "",
    maxTransaction_total_supply: "",
    maxWallet_total_supply: "",
    tax__total_buy: "",
    tax__total_sell: "",
    tax__total_transaction: "",
    marketing__buy: "",
    marketing__sell: "",
    marketing__transactions: "",
    marketing__wallet: "",
    admin__buy: "",
    admin__sell: "",
    admin__transactions: "",
    admin__wallet: "",
    rewards__buy: "",
    rewards__sell: "",
    rewards__transactions: "",
    rewards__address: "",
    liquidity__buy: "",
    liquidity__sell: "",
    liquidity__transactions: "",
    reflections__buy: "",
    reflections__sell: "",
    reflections__transactions: "",
    autoBurn__buy: "",
    autoBurn__sell: "",
    autoBurn__transactions: "",
  });
  const toggleHandler = (name) => {
    setFunctions((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-start items-start flex-wrap  mx-auto w-full gap-x-14 gap-y-8 max-w-[1300px]">
      <RadioGroup
        inputHandler={inputHandler}
        name="Mint"
        objectKey="mint"
        toggleHandler={toggleHandler}
        value={functions.mint}
        inputs={[
          {
            value: formData.mint,
            name: "mint",
            placeholder: "Ex: 10000000",
          },
        ]}
        infoQuestion={"Whats the mint limit?"}
        infoAnswer={["It cant be more then 50% of the initial total supply"]}
      />
      <RadioGroup
        inputHandler={inputHandler}
        name="Burn"
        objectKey="burn"
        toggleHandler={toggleHandler}
        value={functions.burn}
        inputs={[
          {
            value: formData.burn,
            name: "burn",
            placeholder: "Ex: 10000000",
          },
        ]}
        infoQuestion={"Whats the burn limit?"}
        infoAnswer={["It cant be more then 90% of the initial total supply"]}
      />
      <RadioGroup
        inputHandler={inputHandler}
        name="Launch Mode"
        objectKey="launchMode"
        toggleHandler={toggleHandler}
        value={functions.launchMode}
        infoAnswer={[
          "You can activate trading, but after activated you can't deactivate",
        ]}
      />
      <RadioGroup
        inputHandler={inputHandler}
        name="Cooldown"
        value={functions.cooldown}
        objectKey="cooldown"
        toggleHandler={toggleHandler}
        inputs={[
          {
            value: formData.cooldown_token_percent,
            name: "cooldown_token_percent",
            placeholder: "30% of their tokens",
          },
          {
            value: formData.cooldown_minutes,
            name: "cooldown_minutes",
            placeholder: "Every 20 minutes",
          },
        ]}
      />
      <RadioGroup
        inputHandler={inputHandler}
        name="Anti-Whale"
        value={functions.antiWhale}
        objectKey="antiWhale"
        toggleHandler={toggleHandler}
      />
      {functions.antiWhale && (
        <div className="w-full border border-gray border-solid p-6 rounded-xl flex-col flex justify-start items-start  gap-5">
          <RadioGroup
            inputHandler={inputHandler}
            name="Max Transaction"
            value={functions.maxTransaction}
            objectKey="maxTransaction"
            toggleHandler={toggleHandler}
            inputs={[
              {
                value: formData.maxTransaction_total_supply,
                name: "maxTransaction_total_supply",
                placeholder: "1% of the total supply",
              },
            ]}
          />
          <RadioGroup
            inputHandler={inputHandler}
            name="Max Wallet"
            value={functions.maxWallet}
            objectKey="maxWallet"
            toggleHandler={toggleHandler}
            inputs={[
              {
                value: formData.maxWallet_total_supply,
                name: "maxWallet_total_supply",
                placeholder: "1% of the total supply",
              },
            ]}
          />
        </div>
      )}

      <RadioGroup
        inputHandler={inputHandler}
        name="DAO Voting"
        value={functions.daoVoting}
        objectKey="daoVoting"
        toggleHandler={toggleHandler}
        infoAnswer={[
          "Max fee together can't be more than 20%. [Fee decimals is 1.]",
          "You can activate trading, but after activated you cant deactivate",
        ]}
      />

      <RadioGroup
        inputHandler={inputHandler}
        name="Tax Fees"
        value={functions.taxFees}
        objectKey="taxFees"
        infoQuestion={"Whats the tax fees?"}
        infoAnswer={[
          "Tax Fees are a % collected on either buy/sell/transfers of the token ",
          "Max fee together can't be more than 20%. [Fee decimals is 1.]",
        ]}
        toggleHandler={toggleHandler}
        inputs={[
          {
            value: formData.tax__total_buy,
            name: "tax__total_buy",
            placeholder: "Total buy tax",
          },
          {
            value: formData.tax__total_sell,
            name: "tax__total_sell",
            placeholder: "Total sell tax",
          },

          {
            value: formData.tax__total_transaction,
            name: "tax__total_transaction",
            placeholder: "Total transaction tax",
          },
        ]}
      />
      {functions.taxFees && (
        <div className="flex justify-start items-start w-full flex-col border border-solid border-gray p-5 rounded-xl gap-5 ">
          <RadioGroup
            inputHandler={inputHandler}
            name="Rewards"
            sub="Tax % to distribute amoung holders"
            value={functions.rewards}
            objectKey="rewards"
            toggleHandler={toggleHandler}
            inputs={[
              {
                value: formData.rewards__buy,
                name: "rewards__buy",
                placeholder: "On buy",
              },
              {
                value: formData.rewards__sell,
                name: "rewards__sell",
                placeholder: "On sell",
              },
              {
                value: formData.rewards__transactions,
                name: "rewards__transactions",
                placeholder: "On transactions",
              },
              {
                value: formData.rewards__address,
                name: "rewards__address",
                placeholder: "Token address to distribute amoung holders",
              },
            ]}
          />

          <RadioGroup
            inputHandler={inputHandler}
            name="Admin Fees"
            value={functions.adminFees}
            objectKey="adminFees"
            toggleHandler={toggleHandler}
            inputs={[
              {
                value: formData.admin__buy,
                name: "admin__buy",
                placeholder: "On buy",
              },
              {
                value: formData.admin__sell,
                name: "admin__sell",
                placeholder: "On sell",
              },
              {
                value: formData.admin__transactions,
                name: "admin__transactions",
                placeholder: "On transactions",
              },
              {
                value: formData.admin__wallet,
                name: "admin__wallet",
                placeholder: "which wallet will recieve the fees?",
              },
            ]}
          />
          <RadioGroup
            inputHandler={inputHandler}
            name="Marketing Fees"
            value={functions.marketingFees}
            objectKey="marketingFees"
            toggleHandler={toggleHandler}
            inputs={[
              {
                value: formData.marketing__buy,
                name: "marketing__buy",
                placeholder: "On buy",
              },
              {
                value: formData.marketing__sell,
                name: "marketing__sell",
                placeholder: "On sell",
              },
              {
                value: formData.marketing__transactions,
                name: "marketing__transactions",
                placeholder: "On transactions",
              },
              {
                value: formData.marketing__wallet,
                name: "marketing__wallet",
                placeholder: "Which wallet will recieve the fees?",
              },
            ]}
          />
          <RadioGroup
            inputHandler={inputHandler}
            name="Liquidity Fees"
            value={functions.liquidityFees}
            objectKey="liquidityFees"
            toggleHandler={toggleHandler}
            inputs={[
              {
                value: formData.liquidity__buy,
                name: "liquidity__buy",
                placeholder: "On buy",
              },
              {
                value: formData.liquidity__sell,
                name: "liquidity__sell",
                placeholder: "On sell",
              },
              {
                value: formData.liquidity__transactions,
                name: "liquidity__transactions",
                placeholder: "On transactions",
              },
            ]}
          />
          <RadioGroup
            inputHandler={inputHandler}
            name="Reflections"
            value={functions.reflections}
            objectKey="reflections"
            sub="Reflection % to distribute amoung holders"
            toggleHandler={toggleHandler}
            inputs={[
              {
                value: formData.reflections__buy,
                name: "reflections__buy",
                placeholder: "On buy",
              },
              {
                value: formData.reflections__sell,
                name: "reflections__sell",
                placeholder: "On Sell",
              },
              {
                value: formData.reflections__transactions,
                name: "reflections__transactions",
                placeholder: "On transactions",
              },
            ]}
          />

          <RadioGroup
            inputHandler={inputHandler}
            name="Auto Burn"
            sub="Burn % to distribute amoung holders"
            value={functions.autoBurn}
            objectKey="autoBurn"
            toggleHandler={toggleHandler}
            inputs={[
              {
                value: formData.autoBurn__buy,
                name: "autoBurn__buy",
                placeholder: "On buy",
              },
              {
                value: formData.autoBurn__sell,
                name: "autoBurn__sell",
                placeholder: "On sell",
              },
              {
                value: formData.autoBurn__transactions,
                name: "autoBurn__transactions",
                placeholder: "On transactions",
              },
            ]}
          />
        </div>
      )}

      <Link
        to="/links"
        className="bg-yellow-300 px-5 h-[45px] rounded-lg text-black text-lg font-semibold grid place-items-center sm:self-end hover:opacity-40 transition-all duration-300"
      >
        Next
      </Link>
    </div>
  );
};

export default Functions;

const RadioGroup = ({
  name,
  toggleHandler,
  value,
  objectKey,
  inputs,
  inputHandler,
  sub,
  infoQuestion,
  infoAnswer,
}) => {
  const [activeAnswer, setActiveAnswer] = useState(false);
  return (
    <div className="flex justify-start  w-full  items-start flex-col gap-5">
      <div className="flex justify-start items-center gap-5">
        <ToggleSwitch handler={toggleHandler} val={value} name={objectKey} />
        <div>
          <p className="text-white font-semibold text-2xl">{name}</p>
          {sub && <p className="text-white font-semibold text-sm">{sub}</p>}
        </div>
      </div>
      {value && infoAnswer && !inputs?.length ? <Note text={infoAnswer} /> : ""}
      {value && inputs?.length > 0 && (
        <div className="flex justify-start items-start flex-col gap-3 w-full">
          {inputs.map((elem, idx) => {
            return (
              <FloatingLabelInput
                handler={inputHandler}
                key={idx + name}
                {...elem}
              />
            );
          })}
          {infoQuestion && (
            <div className="flex justify-start items-start gap-2  flex-col w-full">
              <button
                onClick={() => setActiveAnswer((prev) => !prev)}
                className="text-white text-lg underline font-semibold "
              >
                {infoQuestion}
              </button>
              {activeAnswer && <Note text={infoAnswer} />}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
