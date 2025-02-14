import "./notFound.css";
import { cmsContent } from "../../cms/index";
import { useEffect } from "react";
import Utils from "../../utils/utility";

const NotFound = () => {
  useEffect(() => {
    Utils.setPageTitle("Jithin & Ashley - 404 Not Found");
  }, []);
  return (
    <>
      <div className="flex flex-col items-center min-h-[calc(110vh-44px)] justify-center bg-gray-100">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 768 640"
          width="150px"
          height="150px"
          enableBackground="new 0 0 768 640"
        >
          <path
            fill="#000000"
            opacity="1.000000"
            stroke="none"
            d="
M235.057281,609.049805 
	C222.239059,600.602173 212.700790,589.892761 208.941711,575.131348 
	C204.768280,558.742859 210.278442,544.323914 219.370544,530.890198 
	C222.826645,525.783752 227.127579,521.367676 231.545364,516.409973 
	C200.200439,485.464264 178.140640,449.133148 164.994522,406.878418 
	C158.881897,408.691193 152.956772,410.669800 146.917725,412.198395 
	C127.647224,417.076141 108.841911,416.802460 91.775246,405.196075 
	C79.581650,396.903717 72.449150,384.978760 70.803459,370.339050 
	C67.139229,337.742615 82.344139,314.643433 108.895592,298.023163 
	C122.264702,289.654602 137.058807,284.365356 152.845612,282.656647 
	C158.845978,282.007202 160.006760,278.528778 161.172150,273.491577 
	C170.146179,234.702576 187.621262,200.047577 212.952240,169.377548 
	C242.127411,134.053101 278.229706,108.201920 321.077423,92.149239 
	C345.121948,83.141090 369.959625,77.041214 395.890015,76.644577 
	C400.712311,76.570816 405.529205,76.185577 410.351624,76.059967 
	C412.127686,76.013702 414.047821,75.677048 415.807800,77.361176 
	C415.399139,81.522362 412.605042,82.334114 408.925751,82.329292 
	C394.748444,82.310707 380.673309,83.704369 366.734772,86.167023 
	C335.573914,91.672523 306.495850,102.769524 279.629364,119.504700 
	C234.591751,147.558685 201.670486,186.118958 180.406158,234.653275 
	C174.586044,247.937256 170.603348,261.863525 166.839935,275.849030 
	C166.053635,278.771027 166.950302,279.919128 169.874557,279.897888 
	C176.540588,279.849426 183.207718,279.918396 189.873230,279.839935 
	C206.057159,279.649445 222.012848,282.426605 238.099640,283.524536 
	C254.185532,284.622375 270.236176,286.251007 286.293579,287.740234 
	C289.819244,288.067230 292.174316,286.750519 294.383209,284.020020 
	C317.672607,255.231522 338.815308,224.912903 359.145660,193.994003 
	C378.649353,164.332336 395.673340,133.185638 414.140808,102.907188 
	C424.979645,85.136314 436.446899,67.747932 447.683960,50.221184 
	C451.649475,44.036106 454.682770,37.359901 458.175751,30.926399 
	C462.087646,23.721273 466.497253,22.052628 474.335846,24.537739 
	C489.945953,29.486673 491.613495,32.429592 487.925995,48.170284 
	C485.465729,58.672241 483.174927,69.214401 480.648560,79.700081 
	C479.681366,83.714569 480.744141,85.551315 484.956360,86.811783 
	C518.075745,96.722404 547.949097,112.819267 574.603638,134.833527 
	C591.641846,148.905502 606.687561,164.867523 619.567566,182.845703 
	C620.343628,183.928986 621.120605,185.011719 621.889404,186.100174 
	C623.334534,188.146255 624.422302,190.314789 621.850403,192.201691 
	C618.759094,194.469681 617.688538,191.358261 616.516418,189.684402 
	C591.117371,153.413437 558.439026,125.730240 518.576843,106.518593 
	C505.820984,100.370888 492.599945,95.425140 477.987946,91.347580 
	C464.016296,158.634872 445.282837,224.521774 427.610687,291.123840 
	C435.133179,292.829651 442.249329,291.332916 449.108368,290.253204 
	C462.205505,288.191498 475.322021,286.105957 488.240692,282.906738 
	C508.177460,277.969604 527.453735,271.255096 545.879211,262.236206 
	C591.357178,239.975555 627.242798,205.943985 660.268127,168.463470 
	C665.885010,162.088913 671.279846,155.517944 676.928650,149.172546 
	C680.475159,145.188629 685.697876,144.497406 689.457153,147.165146 
	C693.277466,149.876221 694.173218,154.807693 691.742920,159.724228 
	C678.687195,186.135315 665.654419,212.557861 652.533142,238.936356 
	C651.542847,240.927216 651.594238,242.515137 652.337463,244.574402 
	C663.812683,276.366974 669.409363,309.138153 667.911865,342.961487 
	C666.682495,370.729309 661.137878,397.660461 651.213440,423.662781 
	C650.289612,426.083313 649.013000,428.459656 649.077026,431.672150 
	C661.128723,429.318756 671.840698,424.771210 681.651001,417.986206 
	C695.144043,408.654114 703.934204,395.739777 710.018616,380.779510 
	C711.786987,376.431549 714.880371,373.882812 719.551453,374.196289 
	C723.993469,374.494415 726.804688,377.201202 727.856934,381.622040 
	C728.442017,384.080170 727.491638,386.246765 726.555847,388.353271 
	C714.551453,415.375732 694.983398,434.105865 666.487305,443.030609 
	C646.598145,449.259735 626.134766,451.249603 605.418274,451.281860 
	C582.419189,451.317657 559.419067,451.354095 536.421692,451.141296 
	C532.266785,451.102844 529.744568,452.496674 527.377197,455.833313 
	C509.718414,480.722382 490.891266,504.678406 469.207977,526.236145 
	C448.217804,547.104797 425.405640,565.671387 399.556915,580.305969 
	C398.751709,580.761841 398.045258,581.392090 396.800171,582.300537 
	C404.458160,584.525696 411.669830,583.944702 418.667175,583.434387 
	C432.414978,582.431641 446.227234,581.364624 459.743439,578.555847 
	C506.456573,568.848633 547.463501,547.964661 582.349426,515.248840 
	C598.239990,500.346741 611.852295,483.600006 623.536987,465.247650 
	C625.950439,461.457153 626.485901,461.295837 631.713562,462.645233 
	C630.976440,467.280731 627.710510,470.618896 625.295288,474.206512 
	C595.552368,518.385986 556.225708,550.820557 506.787140,571.013611 
	C470.837036,585.697266 433.470947,591.428711 394.924896,588.898193 
	C387.202972,588.391296 381.077087,590.295837 374.634521,593.491211 
	C348.953979,606.227783 322.022369,615.497070 293.526764,618.699646 
	C273.563385,620.943237 253.504410,620.031616 235.057281,609.049805 
M231.795685,507.675812 
	C234.733109,512.153320 237.889801,512.053101 241.296677,508.183167 
	C241.835190,507.571472 242.610474,507.168518 243.275452,506.667938 
	C273.357208,484.023193 308.036377,471.614990 343.830597,461.850830 
	C356.479797,458.400299 369.367188,455.810883 382.180054,452.983490 
	C384.481323,452.475677 385.571716,451.727600 385.745972,449.190216 
	C387.376251,425.450867 392.083344,402.140594 396.193909,378.776459 
	C399.526825,359.832642 404.313843,341.148712 408.096558,322.277496 
	C409.247864,316.533783 411.261353,310.869965 411.387115,305.150024 
	C409.544495,303.966492 408.007751,304.311676 406.541138,304.282654 
	C392.901520,304.012329 379.271759,304.160492 365.617310,303.505371 
	C342.850128,302.413025 320.179047,300.086029 297.425934,298.883850 
	C294.277771,298.717529 292.601776,299.604828 290.739777,301.809540 
	C274.826996,320.650848 258.100128,338.729095 239.912003,355.417694 
	C219.953461,373.730835 198.607910,390.107330 174.256821,402.249695 
	C171.703308,403.522980 170.951965,404.960175 171.879486,407.765381 
	C175.801132,419.626221 180.384491,431.207764 185.861145,442.436523 
	C197.566010,466.434906 212.795944,487.954651 231.795685,507.675812 
M319.766907,572.925293 
	C294.719543,563.248840 271.643677,550.132812 250.711960,533.290466 
	C249.102554,531.995422 246.701172,530.821167 248.605988,528.115112 
	C250.485519,525.444885 252.470764,526.393250 254.514221,528.061768 
	C270.075500,540.767822 287.057739,551.192322 305.198517,559.802612 
	C324.857300,569.133423 345.502655,575.396423 366.804596,579.445190 
	C370.954865,580.233948 375.300507,581.610352 379.894043,579.050781 
	C403.877869,565.686523 426.047241,549.831604 446.212769,531.243530 
	C463.621521,515.196594 479.823883,497.979706 494.194244,479.121674 
	C500.819214,470.427856 507.389099,461.674652 513.083252,452.229736 
	C511.031799,450.834229 509.143860,451.331635 507.401276,451.375305 
	C487.932678,451.863281 468.470581,452.173523 449.034058,453.863953 
	C432.468964,455.304626 415.863800,456.138458 399.459595,459.113068 
	C396.950623,459.568054 395.533295,460.209106 395.398743,463.008972 
	C395.042603,470.419617 395.849274,477.640320 398.658264,484.530579 
	C402.768250,494.612061 412.301361,499.512665 422.973419,497.090698 
	C431.935669,495.056732 438.529907,489.868988 442.912170,481.818604 
	C444.562286,478.787323 446.341370,475.408630 450.497894,477.988678 
	C454.460449,480.448303 452.632660,483.645203 450.797424,486.632172 
	C448.056732,491.092865 444.546448,494.862427 440.416138,498.022217 
	C421.308929,512.639893 398.033081,507.491394 388.093658,486.386536 
	C384.955109,479.722290 385.104218,472.445221 385.213104,465.306061 
	C385.269501,461.607513 383.803528,461.002625 380.682098,461.711609 
	C370.956970,463.920471 361.184540,465.927612 351.485046,468.241730 
	C321.229034,475.460297 292.044891,485.549377 265.225830,501.605927 
	C248.349060,511.709991 232.945328,523.554810 222.889175,541.015808 
	C217.330231,550.668091 213.979904,561.176880 216.939041,572.123230 
	C222.095108,591.196411 235.608215,602.429871 254.215546,607.475586 
	C268.576050,611.369629 283.250214,610.630676 297.833160,608.419434 
	C319.048370,605.202698 339.118317,598.237061 358.638550,589.537292 
	C360.782806,588.581604 362.866394,587.489685 364.978088,586.460876 
	C349.515228,582.788025 334.871155,578.466309 319.766907,572.925293 
M496.967285,297.655853 
	C475.159058,301.417084 453.258057,304.518402 431.076965,304.121613 
	C425.520050,304.022217 423.451752,306.034698 422.356842,311.019379 
	C418.083160,330.476105 413.305908,349.824860 409.219635,369.319366 
	C405.609161,386.544159 402.340454,403.856873 399.563232,421.233459 
	C398.057556,430.654144 396.771881,440.202148 396.884003,449.603668 
	C398.453430,450.782471 399.765961,450.183960 401.043732,449.976196 
	C420.070007,446.883392 439.172485,444.029602 458.393402,442.962708 
	C478.320923,441.856537 498.192047,439.452881 518.194519,439.794037 
	C520.747742,439.837585 522.534302,438.943573 524.033630,436.766022 
	C541.807312,410.952820 558.325439,384.349335 573.103821,356.727966 
	C593.201904,319.163757 612.546448,281.201416 631.515320,243.051758 
	C636.228455,233.572800 640.822510,224.034622 645.561584,214.338989 
	C643.699890,214.192307 643.145813,215.386398 642.338379,216.105637 
	C634.009644,223.524536 625.918396,231.225906 617.359680,238.367676 
	C591.970764,259.553314 564.054871,276.412720 532.752441,287.535919 
	C521.282410,291.611755 509.573486,294.629822 496.967285,297.655853 
M202.973511,289.649048 
	C190.005600,288.843750 177.085510,288.862854 164.097595,290.042816 
	C146.766876,291.617340 130.260422,295.768555 115.303802,304.636108 
	C92.263626,318.296265 78.218697,337.539246 79.207489,365.653625 
	C79.768608,381.608215 91.074265,397.304138 106.102402,402.618896 
	C123.950500,408.930939 141.131958,405.597076 158.210983,399.463348 
	C162.375610,397.967651 161.989548,395.189453 161.161896,391.842316 
	C155.461105,368.787720 153.138153,345.367676 153.974472,321.649048 
	C154.161514,316.344238 154.835571,311.050262 155.443604,305.769501 
	C155.727264,303.305969 157.272751,301.711151 159.867706,302.064148 
	C162.617798,302.438263 161.714218,304.564789 161.607635,306.369537 
	C161.107681,314.834473 160.205826,323.316315 160.390671,331.771484 
	C160.666321,344.379517 160.852097,357.060516 163.304581,369.494781 
	C164.927582,377.723450 165.029892,386.330750 169.140808,394.937561 
	C215.087906,371.898285 249.461777,336.059723 282.417480,298.562378 
	C282.185089,298.105408 281.952667,297.648407 281.720276,297.191437 
	C255.774994,294.741089 229.829727,292.290771 202.973511,289.649048 
M421.629730,260.149261 
	C423.506470,251.224854 425.238800,242.267136 427.288025,233.382523 
	C432.620941,210.261154 438.140259,187.182816 443.493927,164.066177 
	C447.503479,146.753220 451.345764,129.401566 455.308868,112.077736 
	C459.603210,93.306046 464.000916,74.557831 468.229950,55.771545 
	C468.982117,52.430229 470.285950,47.794292 466.658905,46.245903 
	C462.718414,44.563732 460.955170,49.218460 459.153137,52.017883 
	C453.111603,61.403240 447.435791,71.027252 441.282410,80.336769 
	C419.050232,113.971741 397.780029,148.219070 376.219299,182.280518 
	C356.252655,213.823654 335.654510,244.917236 312.688812,274.386963 
	C309.262726,278.783325 305.981171,283.292297 302.264313,288.239594 
	C307.324982,289.053009 311.527039,290.082642 315.777649,290.355072 
	C347.038391,292.358398 378.328339,293.391479 409.661041,292.820160 
	C412.732697,292.764130 414.263184,291.960022 415.224579,288.646393 
	C417.869690,279.529388 418.280945,269.926025 421.629730,260.149261 
M629.368408,283.768158 
	C601.870178,336.820618 572.396240,388.734131 539.186340,438.829773 
	C545.529846,438.829773 551.128723,438.831299 556.727600,438.829468 
	C583.017639,438.820831 609.292114,438.551178 635.390747,434.767792 
	C638.234253,434.355591 640.512634,433.482910 641.605652,430.590027 
	C643.310181,426.079010 645.158936,421.620636 646.781616,417.080994 
	C651.429810,404.076904 654.642700,390.738007 657.427917,377.184387 
	C660.735352,361.089508 661.511597,344.867340 661.394592,328.676849 
	C661.273743,311.969849 659.773010,295.219421 655.703491,278.850952 
	C653.360718,269.427917 651.228638,259.955353 646.981079,249.773071 
	C640.835876,261.641144 635.277344,272.376312 629.368408,283.768158 
z"
          />
        </svg>
        <h1 className="text-3xl md:text-4xl tracking-tight ml-4 font-semibold mb-4 mt-10 text-wrap">
          {cmsContent.pages.notFound.mainHeading}
        </h1>
        <p
          className="ml-4 text-gray-500 text-xl"
          dangerouslySetInnerHTML={{
            __html: cmsContent.pages.notFound.subHeading,
          }}
        />
      </div>
    </>
  );
};

export default NotFound;
