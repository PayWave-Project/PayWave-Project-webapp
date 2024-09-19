type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),

  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  sun: (props: IconProps) => (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
      fill="#000000"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g fill="#ffe62e">
          {" "}
          <path d="M20.5 59.7l7-7.2c-2.5-.5-4.8-1.5-6.9-2.9l-.1 10.1">
            {" "}
          </path>{" "}
          <path d="M43.5 4.3l-7 7.2c2.5.5 4.8 1.5 6.9 2.9l.1-10.1"> </path>{" "}
          <path d="M4.3 43.5l10.1-.1C13 41.3 12 39 11.5 36.5l-7.2 7"> </path>{" "}
          <path d="M59.7 20.5l-10.1.1c1.3 2.1 2.3 4.4 2.9 6.9l7.2-7"> </path>{" "}
          <path d="M4.3 20.5l7.2 7c.5-2.5 1.5-4.8 2.9-6.9l-10.1-.1"> </path>{" "}
          <path d="M59.7 43.5l-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9l10.1.1"> </path>{" "}
          <path d="M20.5 4.3l.1 10.1c2.1-1.3 4.4-2.3 6.9-2.9l-7-7.2"> </path>{" "}
          <path d="M43.5 59.7l-.1-10.1C41.3 51 39 52 36.5 52.5l7 7.2"> </path>{" "}
        </g>{" "}
        <g fill="#ffce31">
          {" "}
          <path d="M14.8 44l-4 9.3l9.3-4C18 47.8 16.2 46 14.8 44"> </path>{" "}
          <path d="M49.2 20l4-9.3l-9.2 4c2 1.5 3.8 3.3 5.2 5.3"> </path>{" "}
          <path d="M11.4 28.3L2 32l9.4 3.7c-.3-1.2-.4-2.4-.4-3.7s.1-2.5.4-3.7">
            {" "}
          </path>{" "}
          <path d="M52.6 35.7L62 32l-9.4-3.7c.2 1.2.4 2.5.4 3.7c0 1.3-.1 2.5-.4 3.7">
            {" "}
          </path>{" "}
          <path d="M20 14.8l-9.3-4l4 9.3c1.5-2.1 3.3-3.9 5.3-5.3"> </path>{" "}
          <path d="M44 49.2l9.3 4l-4-9.3C47.8 46 46 47.8 44 49.2"> </path>{" "}
          <path d="M35.7 11.4L32 2l-3.7 9.4c1.2-.2 2.5-.4 3.7-.4s2.5.1 3.7.4">
            {" "}
          </path>{" "}
          <path d="M28.3 52.6L32 62l3.7-9.4c-1.2.3-2.4.4-3.7.4s-2.5-.1-3.7-.4">
            {" "}
          </path>{" "}
          <circle cx="32" cy="32" r="19">
            {" "}
          </circle>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
  qrcode: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M2.193,10.395c.071,.02,1.76,.491,3.747,.491s3.675-.471,3.746-.491c.329-.093,.587-.347,.686-.674,.02-.067,.494-1.666,.494-3.777,0-2.129-.475-3.714-.495-3.78-.099-.326-.357-.579-.684-.671-.071-.02-1.76-.491-3.747-.491s-3.675,.471-3.746,.491c-.329,.093-.588,.347-.686,.674-.02,.067-.494,1.666-.494,3.777,0,2.129,.475,3.714,.495,3.78,.099,.326,.357,.579,.684,.671ZM3.292,3.286c.588-.122,1.578-.286,2.648-.286s2.062,.164,2.649,.286c.12,.565,.277,1.524,.277,2.657,0,1.125-.158,2.088-.278,2.656-.588,.123-1.578,.287-2.648,.287s-2.062-.164-2.649-.286c-.12-.565-.277-1.524-.277-2.657,0-1.125,.158-2.088,.278-2.657Z" />
      <path d="M5.004,7.342c.296,.027,.612,.044,.936,.044s.638-.017,.935-.044c.242-.022,.433-.214,.453-.457,.025-.292,.041-.609,.041-.942s-.015-.651-.04-.943c-.02-.242-.211-.434-.453-.456-.593-.054-1.277-.054-1.87,0-.242,.022-.433,.214-.453,.457-.025,.292-.041,.609-.041,.942s.015,.651,.04,.943c.02,.242,.211,.434,.453,.456Z" />
      <path d="M14.327,10.395c.071,.02,1.76,.491,3.747,.491s3.675-.471,3.746-.491c.329-.093,.588-.347,.687-.674,.02-.067,.493-1.667,.493-3.777,0-2.129-.475-3.714-.494-3.78-.1-.326-.357-.579-.685-.671-.071-.02-1.76-.491-3.747-.491s-3.675,.471-3.746,.491c-.329,.093-.588,.347-.687,.674-.02,.067-.493,1.667-.493,3.777,0,2.129,.475,3.714,.494,3.78,.1,.326,.357,.579,.685,.671Zm1.099-7.109c.586-.122,1.571-.286,2.648-.286s2.062,.164,2.649,.286c.119,.565,.276,1.524,.276,2.657,0,1.125-.158,2.089-.277,2.657-.586,.122-1.571,.286-2.648,.286s-2.062-.164-2.649-.286c-.119-.565-.276-1.524-.276-2.657,0-1.125,.158-2.089,.277-2.657Z" />
      <path d="M17.139,7.342c.297,.027,.612,.044,.936,.044s.638-.017,.935-.044c.242-.022,.433-.214,.453-.457,.024-.292,.041-.609,.041-.942s-.016-.651-.04-.943c-.021-.242-.211-.434-.453-.456-.594-.054-1.276-.054-1.87,0-.242,.022-.433,.214-.453,.457-.024,.292-.04,.609-.04,.942s.016,.651,.04,.943c.021,.242,.211,.434,.452,.456Z" />
      <path d="M9.715,13.637c-.067-.02-1.666-.495-3.775-.495-2.128,0-3.712,.476-3.778,.496-.326,.099-.578,.357-.671,.685-.02,.071-.491,1.761-.491,3.749s.471,3.677,.491,3.748c.093,.329,.347,.587,.674,.686,.067,.02,1.666,.495,3.775,.495,2.128,0,3.712-.476,3.778-.496,.326-.099,.578-.357,.671-.685,.02-.071,.491-1.76,.491-3.749s-.471-3.677-.491-3.748c-.093-.329-.347-.587-.674-.686Zm-1.122,7.085c-.564,.12-1.522,.277-2.654,.277-1.124,0-2.086-.158-2.654-.278-.122-.588-.287-1.579-.287-2.65s.165-2.064,.287-2.651c.564-.12,1.522-.277,2.654-.277,1.124,0,2.086,.158,2.654,.278,.122,.588,.287,1.579,.287,2.65s-.165,2.064-.287,2.651Z" />
      <path d="M6.882,16.683c-.586-.05-1.301-.05-1.884,0-.242,.02-.434,.211-.456,.452-.027,.297-.044,.613-.044,.937s.017,.639,.044,.935c.022,.242,.214,.433,.457,.453,.292,.025,.609,.041,.942,.041s.65-.015,.942-.04c.242-.02,.434-.211,.456-.453,.027-.296,.044-.612,.044-.936s-.017-.639-.044-.935c-.022-.242-.214-.433-.457-.453Z" />
      <path d="M18.071,16.499c-.783,.005-1.259,.479-1.274,1.287,.014,.777,.502,1.264,1.279,1.269,.784-.005,1.275-.499,1.275-1.268,0-.811-.491-1.283-1.28-1.288Z" />
      <path d="M16.046,13.019c-.597-.05-1.33-.05-1.925,0-.363,.031-.651,.317-.684,.68-.027,.304-.045,.627-.045,.958s.018,.654,.045,.958c.033,.363,.321,.649,.684,.68,.597,.05,1.33,.05,1.925,0,.363-.031,.651-.317,.684-.68,.027-.304,.045-.627,.045-.958s-.018-.654-.045-.958c-.033-.363-.321-.649-.684-.68Z" />
      <path d="M16.046,19.006c-.597-.05-1.33-.05-1.925,0-.363,.031-.651,.317-.684,.68-.027,.304-.045,.627-.045,.958s.018,.654,.045,.958c.033,.363,.321,.649,.684,.68,.597,.05,1.33,.05,1.925,0,.363-.031,.651-.317,.684-.68,.027-.304,.045-.627,.045-.958s-.018-.654-.045-.958c-.033-.363-.321-.649-.684-.68Z" />
      <path d="M22.028,13.019c-.597-.05-1.33-.05-1.925,0-.363,.031-.651,.317-.684,.68-.027,.304-.045,.627-.045,.958s.018,.654,.045,.958c.033,.363,.321,.649,.684,.68,.597,.05,1.33,.05,1.925,0,.363-.031,.651-.317,.684-.68,.027-.304,.045-.627,.045-.958s-.018-.654-.045-.958c-.033-.363-.321-.649-.684-.68Z" />
    </svg>
  ),
  send: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      width="512"
      height="512"
    >
      <g id="_01_align_center" data-name="01 align center">
        <path d="M1.444,6.669a2,2,0,0,0-.865,3.337l3.412,3.408V20h6.593l3.435,3.43a1.987,1.987,0,0,0,1.408.588,2.034,2.034,0,0,0,.51-.066,1.978,1.978,0,0,0,1.42-1.379L23.991.021ZM2,8.592l17.028-5.02L5.993,16.586v-4Zm13.44,13.424L11.413,18h-4L20.446,4.978Z" />
      </g>
    </svg>
  ),
  deposit: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M18.5,14.5c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm4.5-4.5c-.553,0-1,.448-1,1v10c0,.552-.448,1-1,1H5c-1.654,0-3-1.346-3-3V9s0-.004,0-.005c.854,.64,1.903,1.005,2.999,1.005H13c.553,0,1-.448,1-1s-.447-1-1-1H5c-.856,0-1.653-.381-2.217-1.004,.549-.607,1.335-.996,2.217-.996h7c.553,0,1-.448,1-1s-.447-1-1-1H5C2.224,3.994,.02,6.304,0,9v10c0,2.757,2.243,5,5,5H21c1.654,0,3-1.346,3-3V11c0-.552-.447-1-1-1Zm-5.503-.615c.815,.815,2.148,.822,2.964,.009l2.236-2.177c.396-.385,.404-1.018,.02-1.414-.387-.396-1.02-.405-1.414-.019l-1.303,1.268V1c0-.552-.447-1-1-1s-1,.448-1,1V7.07l-1.297-1.281c-.394-.388-1.025-.385-1.415,.009-.388,.393-.384,1.026,.009,1.414l2.2,2.173Z" />
    </svg>
  ),
  withdraw: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="m20,16c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm3-8c-.553,0-1,.448-1,1v12c0,.551-.448,1-1,1H5c-1.654,0-3-1.346-3-3v-10s0-.004,0-.005c.854.64,1.903,1.005,2.999,1.005h10c.553,0,1-.448,1-1s-.447-1-1-1H5c-.856,0-1.653-.381-2.217-1.004.549-.607,1.335-.996,2.217-.996h7c.553,0,1-.448,1-1s-.447-1-1-1h-7c-3,0-5,2.5-5,5v10c0,2.757,2.243,5,5,5h16c1.654,0,3-1.346,3-3v-12c0-.552-.447-1-1-1Zm-6.297-3.789l1.297-1.281v6.07c0,.552.447,1,1,1s1-.448,1-1V2.948l1.303,1.268c.194.189.445.284.697.284.261,0,.521-.101.717-.302.385-.396.377-1.029-.02-1.414l-2.227-2.168c-.821-.819-2.152-.818-2.97-.004l-2.204,2.177c-.393.388-.396,1.021-.009,1.414.39.394,1.021.396,1.415.009Z" />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
