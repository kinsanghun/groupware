import 'styles/pages/mypage.scss';

const MyPage = ():JSX.Element => {
    const accessToken = sessionStorage.getItem("access-token");
    const tokenToJson = JSON.parse(accessToken!);
    return (
        <div className="container mypage">
            <h1>my page</h1>
            <div className="wrapper information">
                <div className="profile image">
                    <img src="assets/images/group.png" alt="profile"/>
                </div>
                <div className="profile data">
                    <h1>{tokenToJson.name} 님, 안녕하세요</h1>
                </div>
            </div>
        </div>
    )
}

export default MyPage;