import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { FaCheck } from 'react-icons/fa';

export default function PricingTbas() {
  let tabs = [
    {
      id: "1-3",
      label: "Landing page",
      price: "2000 - 5000 tk only",
      offer:[
        {
          text: "Free Hosting Setup: We offer assistance in setting up hosting for your Landing page."
        },
        {
          text: "One Free Revision: Allow one round of edits at no additional cost."
        },
        {
          text: "SEO Optimization: Include meta tags, alt text for images, and an XML sitemap. It helps in organic reach"
        },
        {
          text: "Responsive Design Guarantee: Ensure the website works perfectly on all devices."
        },
        {
          text: "Setup Facebook pixel or Google analitycs for retargeting users"
        },
      ]
    },
    {
      id: "3-6",
      label: "3-6 pages",
      price: "9999 - 14999 tk",
      offer:[],
    },
    {
      id: "Larger",
      label: "Larger website",
      price: "19999 - 49999 tk",
      offer:[],
    },
  ];

  return (
    <section className="w-full">
        <div className="flex  mx-auto flex-col mt-5 ">
      <Tabs aria-label="Dynamic tabs" items={tabs} className="mx-auto">
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody className="bg-darkPrimary text-secondary">
                <p><strong>Price: </strong>{item.price}</p>
                <p className="text-xl mt-5"><strong>Values :</strong></p>
                <ul>
                {item.offer.map(({text},i) => {
                  return <li key={i} className='flex gap-4 mt-5  items-center text-secondary'><FaCheck className='w-[30px] text-primary'></FaCheck> {text}</li>
                })}
                  
                </ul>
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
    </section>
  );
}
