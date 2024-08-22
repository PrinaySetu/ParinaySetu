import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (location.state && location.state.formData) {
            navigate("/signup", { state: { formData: location.state.formData } });
        } else {
            navigate("/signup");
        }
    };

    return (
        <div className="bg-gradient-to-b from-yellow-200 to-white px-6 py-16 text-darkslategray">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-black mb-8 font-niconne">
                    Terms and Conditions
                </h1>
                <div className="bg-white shadow-md p-6 rounded-lg space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">1. Information Accuracy</h2>
                        <p className="leading-relaxed">
                            The information provided by the bureau is for your assistance. In case of any disputes regarding the policy or fee, the bureau shall not be responsible.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">2. Digital Information</h2>
                        <p className="leading-relaxed">
                            Information provided through digital mediums by the bureau should not be considered completely reliable. Only the information verified by credible sources will be shared by the bureau.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">3. Registration Fees</h2>
                        <p className="leading-relaxed">
                            After paying the registration fees, no form of refund or compensation will be offered. The bureau will not return any fees paid by you under any circumstances.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">4. Attention Before Signature</h2>
                        <p className="leading-relaxed">
                            Before signing any documents with the bureau, ensure that you have carefully reviewed all the terms and conditions.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">5. Additional Fees</h2>
                        <p className="leading-relaxed">
                            In addition to registration fees, other charges as per bureau’s terms and conditions will be charged.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">6. Information Discrepancy</h2>
                        <p className="leading-relaxed">
                            If any discrepancy is found in the information provided by the bureau, you may verify this information during discussion with the bureau. Both parties can discuss the matter with the bureau.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">7. Contact Details for Verification</h2>
                        <p className="leading-relaxed">
                            During the registration process, the ID and contact number of the verifier/witness must be provided to the bureau. The bureau may contact you if necessary.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">8. Notification Post Marriage Agreement</h2>
                        <p className="leading-relaxed">
                            Once the marriage is agreed upon, the bureau should be notified in writing.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">9. Contact Details</h2>
                        <p className="leading-relaxed">
                            Contact details such as ID and mobile numbers must be provided to the bureau. The bureau can contact you if necessary.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">10. Information Sharing with Witnesses</h2>
                        <p className="leading-relaxed">
                            The information provided by you and witnesses who have been contacted can be shared with the parents of the bride or groom, or they can meet in person to discuss the matter.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">11. Legal Disclaimer</h2>
                        <p className="leading-relaxed">
                            The information made available by the bureau should not be used for any legal purposes.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">12. Dispute Resolution</h2>
                        <p className="leading-relaxed">
                            In case of disputes between both parties, the bureau is not responsible for resolving any such disputes.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">13. Document Submission</h2>
                        <p className="leading-relaxed">
                            Ensure to receive a receipt from the bureau for any documents you provide.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">14. Contacting the Bureau</h2>
                        <p className="leading-relaxed">
                            After registration, contact the bureau only through the registered contact number.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-4">15. Verified Information</h2>
                        <p className="leading-relaxed">
                            The bureau will only share the information provided by you once it has been verified and certified by the bureau.
                        </p>
                    </section>
                </div>
            </div>
            <div className="mt-12 text-center">
                <button
                    onClick={handleGoBack}
                    className="inline-block bg-darkslategray text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-all"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default TermsAndConditions;
