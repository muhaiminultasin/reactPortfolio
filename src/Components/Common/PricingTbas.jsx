import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export default function PricingTbas() {
  let tabs = [
    {
      id: "1-3",
      label: "1-3 pages",
      content:"5999 - 9999 tk"
    },
    {
      id: "3-6",
      label: "3-6 pages",
      content:"9999 - 14999 tk"
    },
    {
      id: "Larger",
      label: "Larger website",
      content:"19999 - 49999 tk"
    },
  ];

  return (
    <div className="flex w-full flex-col mt-5">
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
