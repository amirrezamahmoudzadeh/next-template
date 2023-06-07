/* eslint-disable tailwindcss/classnames-order */

import { useLocaleText } from "@/hooks/useLocaleText"
import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FeedbackPortalItems = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <RowComponent imgUrl="/images/feedback-portal_1.webp">
        <TextCol
          header={useLocaleText(
            "یک خانه زیبا برای پیشنهادات کاربران فراهم کنید و با توسعه محصول شفاف اعتماد ایجاد کنید",
            "Provide a beautiful home for user suggestions and build trust with transparent product development"
          )}
          button={useLocaleText(
            "به پورتال بازخورد خود Userback مراجعه کنید",
            "See Userback's own Feedback Portal"
          )}
        >
          <p>
            {useLocaleText(
              `ایجاد اعتماد با مشتریان برای موفقیت هر کسب و کاری ضروری است. این اعتماد را با شفاف بودن در فرآیند توسعه محصول خود به دست آورید. بازخورد کاربر را بپذیرید و آن را به طور منظم در یک پلتفرم عمومی قرار دهید که روند توسعه شما را برای ایجاد اعتماد و ایجاد یک جامعه پر رونق که مایل به کمک در محصول آینده شما است، مشخص می کند.`,
              `Building trust with your customers is essential to the success of
            any business. Earn that trust by being transparent in your product
            development process. Adopt user feedback and house it neatly in a
            public platform outlining your development process to build trust
            and create a thriving community willing to assist in your future
            product.`
            )}
          </p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          icon="/icons/make-it-flow.png"
          text={useLocaleText(
            "نقشه‌های راه عمومی و شفاف محصول و گفتگوهای ویژگی، وفاداری مشتری را ایجاد می‌کند و بار پشتیبانی و ریزش را کاهش می‌دهد.",
            "Public, transparent product roadmaps and feature conversations build customer loyalty and reduce support burdens and churn."
          )}
          title={useLocaleText(
            "با کاربران خود در مرکز بسازید",
            "Build with your users at the center"
          )}
          hasLine
        />
        <ListItem
          icon="/icons/user-centered-development.png"
          text={useLocaleText(
            "نام تجاری سفارشی را اضافه کنید، دامنه های سفارشی را راه اندازی کنید و با گردش کار و ابزار موجود خود ادغام کنید.",
            "Add custom branding, set up custom domains, and integrate with your existing workflows and tools."
          )}
          title={useLocaleText(
            "آن را مال خودت کن آن را به جریان خود تبدیل کنید",
            "Make it your own. Make it your flow"
          )}
          hasLine
        />
      </ListItemWrapper>
      <RowComponent imgUrl="/images/use-feedback-portal_1.png">
        <TextCol
          header={useLocaleText(
            "بازخورد و توسعه محصول را به گفتگو با کاربران خود تبدیل کنید",
            "Turn feedback and product development into a conversation with your users"
          )}
        >
          <p>
            {useLocaleText(
              `بازخورد یک خیابان دو طرفه است. پورتال بازخورد کاربر به طور منظم بازخوردها را در خود جای می دهد و موارد ارسالی را به مکالمه تبدیل می کند. به جامعه کاربری خود اجازه دهید درگیر شوند، به بهترین پیشنهادات بازخورد کاربر شما رأی مثبت دهند و فراتر از چرخه صورتحساب ماهانه با محصول شما درگیر شوند. بینش ارزشمندی در مورد نحوه استفاده آنها از استفاده و درک محصول شما به راحتی به دست آورید.`,
              `Feedback is a two-way street. Userback’s Feedback Portal neatly
            houses feedback and turns submissions into conversations. Allow your
            user community to get involved, upvote your best user feedback
            suggestions and get engaged with your product beyond a monthly
            billing cycle. Gain valuable insights into how they use usage and
            perception of your product with ease.`
            )}
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FeedbackPortalItems
