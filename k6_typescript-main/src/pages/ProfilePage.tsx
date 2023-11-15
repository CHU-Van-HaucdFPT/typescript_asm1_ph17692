const ProfilePage = () => {
  return <div>

    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="" rel="icon" type="image/x-icon" />
      <link rel="stylesheet" href="index.css" />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <title>My info</title>
      <div className="wrapper">
        <div className="main">
          {/* Main page */}
          <div className="profile-slice home">
            <div className="profile">
              <div className="profile-above">
                <div className="avatar">
                  {/* Link avatar */}
                  <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/339019548_881051429624842_59623441575931593_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bXwe_WyuvkUAX_moiiv&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDa0o5T3i0YDQWnvnvGcd-Mhzd04-bPAeh1IICMZs2XtA&oe=654E2968" />
                </div>
                <div className="info ms-4">
                  <h2>Chu Văn Hậu</h2>
                  <div className="info-maxim">
                    <i className="fad fa-comment-lines" /> No pain, no gain!
                  </div>
                </div>
              </div>
              <div className="profile-below mt-4">
                <h1>Chào Các Bạn,</h1>
                <p>Sau đây tôi xin nói qua đôi chút về bản thân mình.</p>
                <p>
                  Tôi là <b>Văn Hậu</b>, một cậu sinh viên ngành <b>Thiết Kế Web</b>{" "}
                  với ước mơ trở thành một Developer chuyên nghiệp, tôi thích khám
                  phá, tìm tòi, học hỏi những điều thú vị trên mạng Internet. Biết
                  đôi chút về HTML, CSS, JS, NodeJS, ReactJS,...
                </p>
                <p>Dưới đây là một vài đường link của tôi.</p>
                <ul className="link ps-0 mt-3">
                  <li className="link-fb">
                    {/* Link facebook */}
                    <a
                      href="https://www.facebook.com/hau.chuvan.733"
                      target="blank"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-square" />
                    </a>
                  </li>
                  <li className="link-ins">
                    {/* Link instagram */}
                    <a
                      href="https://www.instagram.com/chuvan_hau/"
                      target="blank"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="link-git">
                    {/* Link github */}
                    <a
                      href="https://github.com/CHU-Van-HaucdFPT"
                      target="blank"
                      title="Github"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li className="link-mail">
                    {/* Link mail  */}
                    <a
                      href="https://mail.google.com/mail/u/0/?hl=en/#inbox"
                      target="blank"
                      title="Mail"
                    >
                      <i className="fas fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="dark-switch" />
      <div className="play-btn" />
      <audio className="music-audio">
        {/* Link mp3 */}
        <source src="" type="audio/mpeg" />
      </audio>
    </>

  </div>

    ;
};

export default ProfilePage;
