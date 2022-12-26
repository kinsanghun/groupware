import { SubmitButton, TextInput } from "components/form/Input";
import { useRef } from "react";

const JoinGroup = () => {
    const companyNameRef = useRef<HTMLInputElement>(null);
    const groupCodeRef = useRef<HTMLInputElement>(null);
    return (
        <div className="join-group">
            아직 속한 그룹이 없습니다. 그룹에 참여해주세요 !
            <div className="flex-group">
                <div className="wrapper-group">
                    <div className="wrapper">
                        <h2>그룹 만들기</h2>
                        <form>
                            <TextInput ref={companyNameRef} label={"그룹명"}/>
                            <TextInput ref={companyNameRef} label={"관리자명"}/>
                            <TextInput ref={companyNameRef} label={"사용용도"}/>
                            <SubmitButton value="그룹 신청하기"/>
                        </form>
                        <div className="description">그룹을 생성하게 되면 해당 그룹의 관리자가 됩니다.</div>
                    </div>
                    <div className="wrapper">
                        <h2>그룹 참여하기</h2>
                        <form>
                            <TextInput ref={groupCodeRef} label={"참여코드"}/>
                            <SubmitButton value="가입하기"/>
                        </form>
                        <div className="description">관리자에게 문의하여 참여코드를 발급받으세요.</div>
                    </div>
                </div>
                <div className="content">
                    <h2>유의사항</h2>
                    <ul>
                        <li>한 계정당 하나의 그룹에 귀속될 수 있습니다.</li>
                        <li>그룹 탈퇴 시, 다른 그룹에 귀속되려면 24시간이 지나야합니다.</li>
                        <li>이러쿵 저러쿵 여러가지 그럴싸한 유의사항 .1</li>
                        <li>이러쿵 저러쿵 여러가지 그럴싸한 유의사항 .2</li>
                        <li>이러쿵 저러쿵 여러가지 그럴싸한 유의사항 .3</li>
                        <li>이러쿵 저러쿵 여러가지 그럴싸한 유의사항 .4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JoinGroup;