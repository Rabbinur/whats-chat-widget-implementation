 import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";


const App =()=>{

  return   <div className="">
          <WhatsAppWidget
            phoneNo="+8801318222631"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={7000}
            messageBox={true}
            messageBoxTxt=""
            iconSize="40"
            iconColor="white"
            iconBgColor="#0EB582"
            headerIcon="https://i.ibb.co/0fDdJCf/education-icon.png"
            headerIconColor="#0EB582"
            headerTxtColor="white"
            headerBgColor="#0EB582"
            headerTitle="Customer Support"
            headerCaption="Online"
            // bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
              <>
                Hi there 👋 <br />
                <br /> How can I help you?
              </>
            }
            footerBgColor="#999"
            placeholder="Type a message.."
            btnBgColor="#1A2238"
            btnTxt="Start Chat"
            btnTxtColor="white"
          />
        </div>

}
