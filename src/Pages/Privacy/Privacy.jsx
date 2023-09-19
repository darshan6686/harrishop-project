import React from 'react'
import Casset_10 from '../../../Casset/asset 10.png'

const Privacy = () => {
  return (
    <section>
        <div className='container-2xl pt-40 mx-auto' style={{backgroundImage: `url("${Casset_10}")`, backgroundRepeat: 'no-repeat'}}>
            <h1 className='text-center text-6xl font-bold'>Privacy & Policy</h1>
            <p className='text-center text-custom-font text-lg mt-7'>Your privacy is important to us. It is Harry’s policy to respect your privacy regarding <br />
            any information we may collect from you across our website, https:// Harry.com,<br />
            and other sites we own and operate.</p>

            <div className='w-full flex justify-center'>
                <div className='w-11/12 md:w-4/5 xl:w-[1000px] bg-white mx-auto shadow-xl px-14 py-20 mt-16 mb-32'>
                    <h1 className='font-bold text-[16px]'>Effective date: May 25, 2023</h1>
                    <p className='text-[16px] mt-3 text-custom-font leading-[1.62rem]'>Harry knows that you care about how your personal information is used and shared, and Harry takes your privacy seriously. Please read the following to learn more about Harry Privacy Policy (“Privacy Policy”). This Privacy Policy also tells you about your rights and choices with respect to your Personal Information, and how you can reach us to update your contact information or get answers to questions you may have about our privacy practices.</p>
                    <p className='text-[16px] mt-3 text-custom-font leading-[1.62rem]'>
                    By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that Harry will collect, use, and share your information in the following ways. Remember that your use of Services is at all times subject to the Terms as set forth at https://harry.com/legal/terms, which incorporate this Privacy Policy. Any terms Harry uses in this Privacy Policy without defining them have the definitions given to them in the Terms.
                    </p>

                    <h1 className='text-4xl font-bold my-7'>Information Collection</h1>
                    <p className='text-[16px]  text-custom-font leading-[1.62rem]'>You can visit and enjoy our Website without disclosing any Personal Information about yourself. However, for the Service to work properly we will need you to share with us certain Personal Information.</p>
                    <p className='text-[16px] text-custom-font leading-[1.62rem] mt-5'>For the purposes of this Privacy Policy, “Personal Information” means information that identifies, relates to, describes, is reasonably capable of being associated with, or could be reasonably linked, directly or indirectly, with a particular consumer, device or household. It does not include de-identified or aggregate information, or public information lawfully available from governmental records.</p>

                    <h1 className='text-4xl font-bold mt-7 mb-5'>Use of Personal Information</h1>
                    <ul className='list-disc text-custom-font text-[16px]'>
                        <li className='ml-4 my-4'>To provide and maintain the Service;</li>
                        <li className='ml-4 my-4'>To detect, prevent and address technical issues;</li>
                        <li className='ml-4 my-4'>To register you as a user and to provide the services you require;</li>
                        <li className='ml-4 my-4'>To decide whether to offer you a Capchase product or service;</li>
                        <li className='ml-4 my-4'>To notify you about changes to our Service;</li>
                        <li className='ml-4 my-4'>To provide customer care and support;</li>
                    </ul>

                    <h1 className='text-4xl font-bold mt-7 mb-3'>Contact us</h1>
                    <p className='text-[16px] text-custom-font mb-5'>You may contact us at any time via:</p>
                    <a href='mailto:support@harry.com' className='hover:text-custom-pink hover:duration-300 text-[16px]'>Email: support@harry.com</a>
                    <address className='text-custom-font text-[16px] mt-5 hover:text-custom-pink hover:duration-300 cursor-pointer'>harry PTY LTD <br />
                    4270, Brisbane, Australia</address>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Privacy
