import React from 'react'
import { motion } from 'framer-motion'
const AboutPayment = () => {
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
            <h2 className="faqQuestion">What payment methods do you accept?</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
            We accept a variety of payment methods, including credit/debit cards, online banking, mobile wallets (such as Paytm, Google Pay, etc.), and cash on delivery (COD) for your convenience.
            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q.</div>
            <h2 className="faqQuestion">. Is it safe to pay online on your website?</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
            Yes, your payment information is secure with us. We use industry-standard encryption technologies and secure payment gateways to protect your personal and payment details.
            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q</div>
            <h2 className="faqQuestion">Can I pay by cash on delivery (COD)?
</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
            Yes, we offer a cash on delivery (COD) option for customers who prefer to pay in cash when their order is delivered. However, COD may be subject to certain conditions or availability depending on your location.
            </div>
          </div>
        </section>
      </section>
      </motion.main>
  )
}

export default AboutPayment