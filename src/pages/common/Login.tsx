import { PasswordInput, SubmitButton, TextInput } from 'components/form/Input';
import { ButtonLink } from 'components/links/ButtonLink';
import { TextLink } from 'components/links/TextLink';
import { useRef } from 'react';
import 'styles/pages/login.scss';

const Login = ():JSX.Element => {
    const idRef = useRef<HTMLInputElement | null>(null);
    const pwRef = useRef<HTMLInputElement | null>(null);
    return (
        <div className="container login">

            {/* join */}
            <div className='notice-container'>
                <h1>GROUPWARE에서 수 많은 기능을 누려보세요 !</h1>
                <img src="assets/images/group.png" alt="logo"/>
            </div>

            {/* login */}
            <div className='login-container'>
                <h1>login</h1>
                <div className='description'>먼저 로그인을 해주세요.</div>
                <form>
                    <TextInput ref={idRef} label={"아이디"}/>
                    <PasswordInput ref={pwRef} label={"비밀번호"}/>
                    <SubmitButton value="로그인"/>
                </form>
                <div className='description'>
                    아이디/비밀번호를 분실했나요?
                    <div className='forget-group'>
                        <TextLink URL='/' text="아이디찾기"/> / <TextLink URL='/' text="비밀번호찾기"/>
                    </div>
                </div>
                <div className='description' style={{marginTop:"8px"}}>
                    아이디가 아직 없나요?
                    <div className='forget-group'>
                        <TextLink URL='/' text="회원가입하기"/>
                    </div>
                </div>
                <div className='social-login'>
                    <h2>SOCIAL LOGIN</h2>
                    <ButtonLink><><img src="assets/logo/kakao-icon.png" alt="카카오"/>카카오 로그인</></ButtonLink>
                    <ButtonLink><><img src="assets/logo/google-icon.png" alt="구글"/>구글 로그인</></ButtonLink>
                    <ButtonLink><><img src="assets/logo/apple-icon.png" alt="애플"/>애플 로그인</></ButtonLink>
                </div>
            </div>

        </div>
    )
}

export default Login;