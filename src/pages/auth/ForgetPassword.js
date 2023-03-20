import React from 'react'
import { AuthOneCol } from './styled';

import InputEmail from '../../common/formFields/email/InputEmail';
import PrimaryBlueBtn from '../../common/buttons/PrimaryBlueBtn';

const ForgetPassword = () => {
  return (
    <AuthOneCol>
        <div className='max-w-[506px] w-full h-auto  md:p-14 xs:px-5 xs:py-14 bg-white boxShadow rounded-lg'>
            <h2 className='font-SfPro font-semibold text-2xl leading-8 text-primaryBlack text-center'>Forgot Password</h2>
            <p className='font-SfPro font-normal text-sm leading-5 text-primaryGray text-center mt-2' >Enter your email and we’ll send you a reset link</p>
            
            <form method='' action=''>
                <div className="mt-8">
                    <InputEmail label="Email" placeholder="Enter email" name="email"/>
                </div>
                <div className="mt-8">
                    <PrimaryBlueBtn type='submit' label='Send reset link'/>
                </div>
                
            </form>
            
            

        </div>
    </AuthOneCol>
  )
}

export default ForgetPassword