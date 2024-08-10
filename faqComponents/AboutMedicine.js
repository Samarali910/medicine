import React from 'react'
 import './faqCssComponents/FaqHero.css'
 import { motion } from 'framer-motion'
const AboutMedicine = () => {
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
            <h2 className="faqQuestion">How can I order medicines online?</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
              To order medicines online, simply browse our website, add the
              required medicines to your cart, upload your prescription if
              necessary, and proceed to checkout. You can pay using various
              payment methods, and your order will be delivered to your
              doorstep.
            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q.</div>
            <h2 className="faqQuestion">Do I need a prescription to buy medicines online?</h2>
          </div>
          <div className="faqAnswer">
          <h4>A.</h4>
            <div>
            Yes, for certain prescription medicines, you will need to upload a valid prescription from a registered medical practitioner. Over-the-counter medicines can be purchased without a prescription.
            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q</div>
            <h2 className="faqQuestion">What should I do if I can't find my medicine on your website?</h2>
          </div>
          <div className="faqAnswer">
          <h4>A</h4>
            <div>
            If you can't find your required medicine, please contact our customer service team. They will assist you in checking the availability or suggest alternative options.
            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q</div>
            <h2 className="faqQuestion">How do you ensure the quality of the medicines?</h2>
          </div>
          <div className="faqAnswer">
            <div>A.</div>
            <div>
            We source our medicines only from certified and reputable manufacturers and distributors. All medicines are stored and handled following strict quality standards to ensure they reach you in the best condition.
            </div>
          </div>
        </section>
      </section>

      <section className="faqQuestionAnswer">
        <section className="faqCenterContainer">
          <div className="faqCenterQuestion">
            <div className="faqQSymbal">Q</div>
            <h2 className="faqQuestion">What are your delivery options?</h2>
          </div>
          <div className="faqAnswer">
             <h4>A</h4>
            <div>
            We offer standard and express delivery options. Standard delivery typically takes 2-5 business days, while express delivery is available for urgent orders and usually arrives within 1-2 business days.
            </div>
          </div>
        </section>
      </section>
      </motion.main>
  )
}

export default AboutMedicine