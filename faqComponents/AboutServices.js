import React from 'react'
import { motion } from 'framer-motion'
const AboutServices = () => {
  return (
    <motion.main 
     initial={{opacity:0,x:-100}}
     animate={{opacity:1,x:0}}
     transition={{
        duration:0.6,
        delay:0.2
     }}
    >
         <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q.</div>
            <h2 className="faqQuestion">How does your medicine delivery service work?</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
            Our medicine delivery service allows you to order your prescribed medicines online and have them delivered directly to your doorstep. Simply upload your prescription, place your order, and our team will ensure timely delivery to your specified address.
            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q.</div>
            <h2 className="faqQuestion"> What areas do you deliver to?
</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
            We currently deliver to [list of areas or regions you serve]. If you're unsure whether we deliver to your area, you can check our service coverage on our website or contact our customer support team for assistance.


            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q.</div>
            <h2 className="faqQuestion">How long does it take for my order to be delivered?</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
            If you can't find your required medicine, please contact our customer service team. They will assist you in checking the availability or suggest alternative options.
            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q.</div>
            <h2 className="faqQuestion"> Can I track my order?</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
            Yes, once your order is dispatched, you will receive an email or SMS with a tracking link. You can use this link to monitor the status of your delivery in real-time.
            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q.</div>
            <h2 className="faqQuestion"> Is there a minimum order value for delivery?</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
            Yes, we have a minimum order value of [amount] for free delivery. Orders below this amount may incur a small delivery fee. The exact charges will be displayed during the checkout process.
            </div>
          </div>
        </section>
      </section>
      </motion.main>
  )
}

export default AboutServices