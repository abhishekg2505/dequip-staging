const WEBSITE_URL = "https://www.quranium.org";

export const generateEmailContent = (
  type = "",
  name = "",
  email = "",
  emailSubject = "",
  heroBannerUrl = "",
  para1 = "",
  para2 = "",
  para3 = "",
  para4 = "",
  para5 = "",
  designation = ""
) => {
  const htmlData = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${emailSubject}</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        .email-container {
            width: 100%;
            background-color: #f4f4f4;
        }

        .email-content {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        .social-icon {
     
         margin-top: 22px;
         width : 100% !important;
        }

        .title {
        font-size: 30px;
        margin: 20px 0;
        }

        .name {
        font-size: 15px;
        }

        .line{
          width: 100%;
          height: 1px;
          background: gray;
          margin-top: 22px;
        }

        .footer {
        width : 100%;
        }


    </style>

    </head>
    <body style="width=600px">
       <div class="email-container">
        <div class="email-content">
        ${generateBody(
          name,
          heroBannerUrl,
          emailSubject,
          para1,
          para2,
          para3,
          para4,
          para5,
        )}
        ${generateFooter(type)}
         </div>
    </div>
    </body>
    </html>`;

  return {
    html: htmlData,
  };
};

const generateBody = (
  name :string,
  heroBannerUrl :string,
  title :string,
  para1 :string,
  para2 :string,
  para3 :string,
  para4 :string,
  para5 :string
) => {
  return `
    <div class="hero-banner">
     <center style="margin-top:30px;">
     <a href=${WEBSITE_URL} target = "_blank rel="noopener noreferrer"">   
     <img
       width="600px"
       src="${heroBannerUrl}"
       class=""
       alt="heroImage"
     />
     </a>
    </center>
    </div>
    <div>
      <center class="title">${title}</center>
      <p>Dear <b>${name}</b> </p>
      <p>
        ${para1}
      </p>
      <p>
        ${para2}
      </p>
      <p>
        ${para3}
      </p>
      <p>
        ${para4}
      </p>
        <p>
        ${para4}
      </p>
      <p>
        ${para5}
      </p>
      <p>Kind regards,</p>
    </div>`;
};

// Header
const LOGO_URL =
  "https://github.com/Quranium/Assets/blob/main/quraniumLogo.png?raw=true";

export const generateHeader = () => {
  return `
    <center>
     <a href=${WEBSITE_URL} target = "_blank" rel="noopener noreferrer"> 
      <img
        alt="logo"
        src="${LOGO_URL}"
      />
     </a>
    </center>`;
};

// footer
const INSTAGRAM_URL = "https://www.instagram.com/quraniumofficial/";
const INSTAGRAM_ICON_URL =
  "https://github.com/Quranium/Assets/blob/main/socialmedia/instagram.png?raw=true";

const LINKDIEN_URL = "https://www.linkedin.com/company/quranium/";
const LINKDIEN_IMAGE_URL =
  "https://github.com/Quranium/Assets/blob/main/socialmedia/linkdien.png?raw=true";

const TWITTER_URL = "https://x.com/quranium_org";
const TWITTER_IMAGE_URL =
  "https://github.com/Quranium/Assets/blob/main/socialmedia/x.png?raw=true";

const MEDIUM_URL = "https://quranium-org.medium.com/";
const MEDIUM_IMAGE_URL =
  "https://github.com/Quranium/Assets/blob/main/socialmedia/medium.png?raw=true";

const TELEGRAM_URL = "https://t.me/quraniumofficial";
const TELEGRAM_IMAGE_URL =
  "https://github.com/Quranium/Assets/blob/main/socialmedia/telegram.png?raw=true";

const WEBSITE_IMAGE_URL =
  "https://github.com/Quranium/Assets/blob/main/socialmedia/website.png?raw=true";

export const generateFooter = (type :string) => {
  const isNextGen = type === "nextgen";
  const content = isNextGen
    ? `
          <div>
            <br><b class="name">Saffan Shaikh</b></br>
            <br>Program Manager</br>
            <br>Quranium</br>
          </div>`
    : `
          <p>
            The <a href="${WEBSITE_URL}" target="_blank" rel="noopener noreferrer" style="color: inherit;">Quranium</a> Team
          </p>`;

  return `
      <footer class="footer">
        ${content}
        <div class="line"></div>
        <center class="social-icon">
          <a href="${INSTAGRAM_URL}" target="_blank" class="mr-2" rel="noopener noreferrer" style="margin-right: 10px;">
            <img src="${INSTAGRAM_ICON_URL}" alt="instagram" />
          </a>
          <a href="${TELEGRAM_URL}" target="_blank" class="mr-2" rel="noopener noreferrer" style="margin-right: 10px;">
            <img src="${TELEGRAM_IMAGE_URL}" alt="telegram" />
          </a>
          <a href="${TWITTER_URL}" target="_blank" class="mr-2" rel="noopener noreferrer" style="margin-right: 10px;">
            <img src="${TWITTER_IMAGE_URL}" alt="x" />
          </a>
          <a href="${LINKDIEN_URL}" target="_blank" class="mr-2" rel="noopener noreferrer" style="margin-right: 10px;">
            <img src="${LINKDIEN_IMAGE_URL}" alt="linkdien" />
          </a>
          <a href="${MEDIUM_URL}" target="_blank" class="mr-2" rel="noopener noreferrer" style="margin-right: 10px;">
            <img src="${MEDIUM_IMAGE_URL}" alt="medium" />
          </a>
          <a href="${WEBSITE_URL}" target="_blank" class="mr-2" rel="noopener noreferrer" style="margin-right: 10px;">
            <img src="${WEBSITE_IMAGE_URL}" alt="website" />
          </a>
        </center>
      </footer>`;
};
