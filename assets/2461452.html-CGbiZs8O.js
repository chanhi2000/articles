import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as e,t as m,e as t,n as f,g as u,w as i,a as _,d as a,f as l,r as o,o as b}from"./app-BgNevrm5.js";const v="/bookshelf/assets/image/d2.naver.com/2461452/1.png",k="/bookshelf/assets/image/d2.naver.com/2461452/2.png",x="/bookshelf/assets/image/d2.naver.com/2461452/3.png",N="/bookshelf/assets/image/d2.naver.com/2461452/4.png",E="/bookshelf/assets/image/d2.naver.com/2461452/5.png",y="/bookshelf/assets/image/d2.naver.com/2461452/6.png",U="/bookshelf/assets/image/d2.naver.com/2461452/7.png",L="/bookshelf/assets/image/d2.naver.com/2461452/8.png",O="/bookshelf/assets/image/d2.naver.com/2461452/9.gif",X="/bookshelf/assets/image/d2.naver.com/2461452/10.gif",z="/bookshelf/assets/image/d2.naver.com/2461452/11.gif",A="/bookshelf/assets/image/d2.naver.com/2461452/12.gif",S="/bookshelf/assets/image/d2.naver.com/2461452/13.png",q="/bookshelf/assets/image/d2.naver.com/2461452/14.gif",R="/bookshelf/assets/image/d2.naver.com/2461452/15.png",I="/bookshelf/assets/image/d2.naver.com/2461452/16.png",T={},V={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},D={class:"table-of-contents"},P=e("hr",null,null,-1),C=l('<p>이 글에서는 UX 디자이너의 관점에서 UX 원칙을 활용해, 로그 수집 시스템 NELO 4.0 개발에 어떻게 접근했고 NELO 3.0에 비해 어떻게 개선했는지 공유하고자 합니다.</p><div class="hint-container info"><p class="hint-container-title">NELO가 무엇인지 아시나요?</p><p>NELO는 네이버에서 개발한 로그 수집 시스템입니다. 다양한 서비스에서 운영하는 서버와 사용자 모바일 기기에서 발생하는 로그를 수집하기 위한 SDK를 제공하고, 수집한 로그를 분석하기 위한 다양한 기능을 웹 UI를 통해 제공합니다.</p><p>웹 UI의 기능은 크게 SDK를 통해 수집한 로그를 조회할 수 있는 <strong>검색</strong>, 비정상 종료 기록을 살펴볼 수 있는 <strong>크래시</strong>, 특정 상황에서 메시지를 받을 수 있는 <strong>알람</strong> 등으로 구성되어 있습니다. 알람 기능을 사용하면 사용자가 지정한 특정 패턴과 일치하는 로그 유입이 감지될 때 사용자에게 알려줄 수 있습니다. 이를 통해 장애 상황이나 이상 탐지 등 다양한 시나리오에 기민하게 대응할 수 있습니다.</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><hr><h2 id="리서치-시간이-없다-일단-개발부터" tabindex="-1"><a class="header-anchor" href="#리서치-시간이-없다-일단-개발부터"><span>리서치? 시간이 없다! 일단 개발부터</span></a></h2><p>NELO 4.0은 시작부터 난관을 안고 있었는데, 바로 개발과 UX 설계를 동시에 같이 시작해야 한다는 것이었습니다. 모든 프로젝트에 저마다의 사연이 있듯이 NELO 4.0 프로젝트도 그랬고, 어쩔 수 없는 상황 때문에 &#39;기획 → 설계 → 개발&#39;의 일반적인 흐름을 따를 수 없었습니다. 어떤 부분은 설계보다 앞서 개발을 한 후에 수정 설계를 진행하기도 했습니다. UX 리서치도 당연히 엄두를 내기 어려웠습니다.</p><p>제품 개발 이론에 꼭 맞는 아름다운 상황은 아니지만 실무 전선에서는 흔하다면 흔하게 볼 수 있는 NELO 4.0의 프로젝트 히스토리에 많은 분들이 공감하실 것 같은데요, 이러한 상황 속에서 저희는 어떻게 UX를 개선해 나갔을까요?</p><hr><h2 id="nelo-4-0을-위한-3단계-ux-사전-진단-프로세스" tabindex="-1"><a class="header-anchor" href="#nelo-4-0을-위한-3단계-ux-사전-진단-프로세스"><span>NELO 4.0을 위한 3단계 UX 사전 진단 프로세스</span></a></h2><p>&#39;UX 리서치(사용자 조사) → 분석 → 설계 → 검증&#39;이라는 일반적인 UX 프로세스를 따르지 못하더라도, 논리적인 설계와 사용자에게 공감을 얻을 수 있는 타당한 UX 개선을 위해서는 상황의 한계를 보완할 수 있는 새로운 업무 프로세스가 필요했습니다.</p><p>저희는 다음의 3단계 사전 진단 프로세스로 UX 리서치와 분석 단계를 대체했습니다.</p><ol><li>휴리스틱 평가</li><li>이슈별 UX 개선 수준 진단</li><li>UX 히스토리 취합</li></ol><p>이 3단계 사전 진단 프로세스의 목적은 단순히 현재의 사용성을 빠르게 진단하는 것에 그치지 않았습니다. 궁극적 목표는 바로 UX 이슈의 그룹화 및 일정 수립이었습니다. 1단계에서 UX 이슈를 그룹화한 뒤 우선순위를 설정하고, 2단계에서 개선의 정도에 따라 리소스를 분배하고 일정을 수립하고, 3단계에서 개선의 타당성을 검증해 진단의 속도를 높이는 것입니다.</p><h3 id="_1-휴리스틱-평가-무엇이-우선적으로-살펴야-하는-사용성-이슈일까" tabindex="-1"><a class="header-anchor" href="#_1-휴리스틱-평가-무엇이-우선적으로-살펴야-하는-사용성-이슈일까"><span>1. 휴리스틱 평가 - &quot;무엇이 우선적으로 살펴야 하는 사용성 이슈일까?&quot;</span></a></h3><p>휴리스틱은 전문가 평가 방법론으로, 사용자를 섭외하고 조사할 충분한 리소스가 확보되지 못한 경우 UX 전문가가 제품 전반의 사용성을 평가하는 기술입니다. 휴리스틱에 관련된 대표적인 이론에는 여러 가지가 있지만 NELO 4.0 프로젝트에서는 해당 이론을 공식대로 따르기보다는, 평가 과정에서 놓치는 부분 없이 결과를 분류하기 위한 가이드로 이론을 참고했습니다.</p><p>피터 모빌의 벌집(honeycomb) 모델을 플랫폼 도구에 맞게 목적 부합성(useful), 예측 가능성(usable), 가독성(desirable), 기능 접근성(findable)의 4가지 기준으로 재해석했습니다. 그리고 이 4가지 기준으로 진단한 UX 이슈를 시급도와 개선 효과에 따라 다음과 같이 분류했습니다.</p><ul><li>Type 1: 많이 시급하고, 적은 개선으로 변화가 가능한 것</li><li>Type 2: 시급하고, 많은 개선이 필요한 것</li><li>Type 3: 조금 시급하고, 많은 개선이 필요한 것</li></ul><p>그리고 Type 1→2→3 순서로 진행하는 것으로 우선순위를 정했습니다.</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-이슈별-ux-개선-수준-진단-어디까지-개선하는-것이-가능할까" tabindex="-1"><a class="header-anchor" href="#_2-이슈별-ux-개선-수준-진단-어디까지-개선하는-것이-가능할까"><span>2. 이슈별 UX 개선 수준 진단 - &quot;어디까지 개선하는 것이 가능할까?&quot;</span></a></h3><p>시급도와 개선 효과에 따라 분류된 3가지 타입의 UX 이슈를 이번 리뉴얼에서 얼마나 개선할지 결정해야 했습니다. 한정된 시간 안에 UX를 최대한 개선하기 위해, 제품 구석구석 사용성 개선의 밸런싱이 필요했습니다.</p><p>다음의 4단계로 로드맵을 짜고 각 이슈별로 어느 단계까지 진행하는 것이 타당한지 결정하며 일정을 조율해 나갔습니다.</p><ol><li>UI 개선</li><li>컴포넌트 개선</li><li>사용자 여정(journey) 개선</li><li>정보 구조 개선</li></ol><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-ux-히스토리-취합-어떻게-개선되는-것을-원할까" tabindex="-1"><a class="header-anchor" href="#_3-ux-히스토리-취합-어떻게-개선되는-것을-원할까"><span>3. UX 히스토리 취합 - &quot;어떻게 개선되는 것을 원할까?&quot;</span></a></h3><p>NELO는 오랜 시간 개선을 거쳐온 제품이기 때문에 팀원들이 그 동안 쌓아온 지식 노하우를 배경 삼는 것이 중요했습니다. 내부 담당자를 인터뷰해 경험적으로 집약, 도출된 인사이트를 학습하고, 취합된 VOC를 바탕으로 사용자 리서치 과정을 대체했습니다. 또한, 가장 먼저 UX/UI 표준 가이드를 정의하여 와이어프레임 단계 없이 UI 설계를 진행했습니다.</p><hr><h2 id="_4가지-사용성-원칙" tabindex="-1"><a class="header-anchor" href="#_4가지-사용성-원칙"><span>4가지 사용성 원칙</span></a></h2><p>앞에서 설명한 3단계 사전 진단 프로세스에 따라 UX 이슈를 그룹화하고 우선순위를 설정한 뒤, 리소스를 분배하고 일정을 수립하고, 개선의 타당성을 검증하는 과정에서 UX 개선의 중심을 잡아줄 대원칙이 필요했습니다.</p><p>저희는 그 원칙을 &#39;UX의 기본기&#39;에서 찾기로 했고, &#39;UX 기초 체력 향상&#39;을 큰 줄기로 정했습니다. 그리고 이를 실현하기 위해 4가지 사용성 원칙을 정의하고 그에 따른 개선을 진행했습니다. 사용자 조사가 없는 상태에서 철학을 바탕으로 사용성을 개선하기 위한 저희 팀만의 방법이었습니다. NELO 4.0에 필요한 UX 기본기, 4가지 원칙은 다음과 같았습니다.</p><h3 id="_1-강약의-원칙-정보의-강-중-약에-따른-구조화로-가독성을-높인다" tabindex="-1"><a class="header-anchor" href="#_1-강약의-원칙-정보의-강-중-약에-따른-구조화로-가독성을-높인다"><span>1. 강약의 원칙 - &quot;정보의 강-중-약에 따른 구조화로 가독성을 높인다.&quot;</span></a></h3><p>NELO는 대시보드 성격을 가진 제품인 만큼 여러 가지 종류의 정보가 한 화면 안에 응축되어 있는 경우가 많았습니다. 그리고 차트, 칩, 아이콘 등으로 정보의 상징을 담은 시각화 기법이나 컬러 상징이 많이 쓰이고 있었습니다. 매우 많은 텍스트가 한 화면에 노출되는 것도 특징이었습니다. 문제는 이러한 정보가 시각적으로 정돈되어 있지 않다는 것이었습니다.</p><p>저희는 강약의 원칙을 바탕으로, 빨-노-초와 같은 직관적 컬러 상징을 사용하여 데이터 이해도를 높이고, 데이터에 사용된 색과 충돌하지 않는 프라이머리 컬러를 사용하여 중요 정보에 대한 집중도를 높였습니다. 강-중-약의 원칙에 따르는 타이포그래피를 사용하여 화면 전체를 구성함으로써 중요한 정보가 가장 먼저 인지되고 부속 정보는 그에 순차적으로 따라오도록 설계했습니다.</p><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-군집의-원칙-유사-정보-유관-컴포넌트는-그룹화하여-직관성을-높인다" tabindex="-1"><a class="header-anchor" href="#_2-군집의-원칙-유사-정보-유관-컴포넌트는-그룹화하여-직관성을-높인다"><span>2. 군집의 원칙 - &quot;유사 정보, 유관 컴포넌트는 그룹화하여 직관성을 높인다.&quot;</span></a></h3><p>기존의 NELO는 필터는 좌측 하단에, 그에 영향을 받는 정보는 우측 상단에 배치되어 있는 등 유관 정보임에도 서로 흩어져 있어 사용자가 직관적으로 원하는 정보를 찾기 어려운 점이 있었습니다. 군집의 원칙은 이러한 정보의 배치와 레이아웃에 대한 이야기입니다. 유사한 정보와 컴포넌트는 그룹화하여 배치하고, 그룹화된 군집 간의 위계(hierarchy)는 좌→우, 상→하로 배치하는 것만으로 사용자는 기능의 흐름을 유추할 수 있게 됩니다.</p><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-통일성의-원칙-제품-전반의-사용자-경험을-통일해-예측-가능성을-높인다" tabindex="-1"><a class="header-anchor" href="#_3-통일성의-원칙-제품-전반의-사용자-경험을-통일해-예측-가능성을-높인다"><span>3. 통일성의 원칙 - &quot;제품 전반의 사용자 경험을 통일해 예측 가능성을 높인다&quot;</span></a></h3><p>취소/확인 버튼의 위치가 한 제품에서 1개라도 통일화되지 않으면 휴먼 에러가 발생하는 것은 당연합니다. NELO 4.0 개선에서는 작게는 버튼, 크게는 화면 간의 동선과 사용자 여정까지 통일화된 기준을 따르도록 했습니다. 이를 위해 원칙이 되는 UX/UI 표준 가이드를 마련해, 사용자로 하여금 학습하지 않은 화면에서도 쉽게 예측하며 사용할 수 있도록 하는 데에 집중했습니다.</p><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-단순화의-원칙-정보와-사용자-여정의-단순화로-seamless한-경험을-제공한다" tabindex="-1"><a class="header-anchor" href="#_4-단순화의-원칙-정보와-사용자-여정의-단순화로-seamless한-경험을-제공한다"><span>4. 단순화의 원칙 - &quot;정보와 사용자 여정의 단순화로 seamless한 경험을 제공한다&quot;</span></a></h3><p>기존 NELO의 사용자 여정 지도를 그려보면, 반복되는 부분을 상당수 발견할 수 있었습니다. 클릭의 반복 뿐만 아니라, 동선의 반복, 시선 이동의 반복이 일어나 사용성 저하가 초래되고 있었습니다. 이에 따라, 꼭 필요한 정보만 강조하고 다른 정보는 숨기는 단순화를 통해 정보 전달력을 높이고, 사용자 여정에 맞춘 UX 설계를 통해 반복 행위를 최소화했습니다.</p><figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="그래서-nelo-4-0은-어떻게-되었을까요" tabindex="-1"><a class="header-anchor" href="#그래서-nelo-4-0은-어떻게-되었을까요"><span>그래서 NELO 4.0은 어떻게 되었을까요?</span></a></h2><h3 id="검색-영역" tabindex="-1"><a class="header-anchor" href="#검색-영역"><span>검색 영역</span></a></h3><h4 id="사용자-여정-개선" tabindex="-1"><a class="header-anchor" href="#사용자-여정-개선"><span>사용자 여정 개선</span></a></h4><p>군집의 원칙에 따라 관련 컴포넌트는 위계를 가지는 동시에 가까이 배치했고, 통일감을 높였습니다. 또한 사용자 여정 개선을 통해 seamless한 검색 경험을 제공하도록 했습니다.</p><figure><img src="'+L+'" alt="좌: 3.0 검색 화면, 우: 4.0 검색 화면" tabindex="0" loading="lazy"><figcaption>좌: 3.0 검색 화면, 우: 4.0 검색 화면</figcaption></figure><h4 id="lucene-쿼리-편집기와-집계-facet-에-대한-직관적-선택" tabindex="-1"><a class="header-anchor" href="#lucene-쿼리-편집기와-집계-facet-에-대한-직관적-선택"><span>Lucene 쿼리 편집기와 집계(facet)에 대한 직관적 선택</span></a></h4>',49),F={href:"https://pegjs.org/",target:"_blank",rel:"noopener noreferrer"},K=l('<p>상태는 FATAL ERROR, WARN, INFO 등 로그의 레벨을 나타내는 것으로, NELO 사용자들이 자주 사용하는 집계 기준 중 하나입니다.</p><figure><img src="'+O+'" alt="상태를 집계에서 분리해 사용성을 높이고, 상태와 집계에 대한 선택, 유일 선택, 배타적 선택을 지원하여 직관적으로 사용할 수 있도록 개선했습니다." tabindex="0" loading="lazy"><figcaption>상태를 집계에서 분리해 사용성을 높이고, 상태와 집계에 대한 선택, 유일 선택, 배타적 선택을 지원하여 직관적으로 사용할 수 있도록 개선했습니다.</figcaption></figure><h4 id="로그-페이징-개선" tabindex="-1"><a class="header-anchor" href="#로그-페이징-개선"><span>로그 페이징 개선</span></a></h4><figure><img src="'+X+'" alt="내비게이션을 기존의 페이지 방식에서 무한 스크롤 방식으로 개선해 더욱 seamless한 사용자 경험을 제공하도록 했습니다." tabindex="0" loading="lazy"><figcaption>내비게이션을 기존의 페이지 방식에서 무한 스크롤 방식으로 개선해 더욱 seamless한 사용자 경험을 제공하도록 했습니다.</figcaption></figure><h4 id="히스토그램-인터랙션" tabindex="-1"><a class="header-anchor" href="#히스토그램-인터랙션"><span>히스토그램 인터랙션</span></a></h4><figure><img src="'+z+'" alt="히스토그램 인터랙션은 NELO 3.0 사용자의 요구가 많았던 기능으로, 검색 히스토그램의 영역을 선택하여 원하는 시간 구간을 설정할 수 있게 되었습니다." tabindex="0" loading="lazy"><figcaption>히스토그램 인터랙션은 NELO 3.0 사용자의 요구가 많았던 기능으로, 검색 히스토그램의 영역을 선택하여 원하는 시간 구간을 설정할 수 있게 되었습니다.</figcaption></figure><h3 id="크래시-영역" tabindex="-1"><a class="header-anchor" href="#크래시-영역"><span>크래시 영역</span></a></h3><figure><img src="'+A+'" alt="NELO 3.0에서는 크래시를 선택하려면 두 번 클릭해야 했지만, NELO 4.0에서는 프로젝트만 선택하면 지원하는 플랫폼이 자동으로 선택되어 클릭 횟수를 줄였습니다." tabindex="0" loading="lazy"><figcaption>NELO 3.0에서는 크래시를 선택하려면 두 번 클릭해야 했지만, NELO 4.0에서는 프로젝트만 선택하면 지원하는 플랫폼이 자동으로 선택되어 클릭 횟수를 줄였습니다.</figcaption></figure><h3 id="알람-영역" tabindex="-1"><a class="header-anchor" href="#알람-영역"><span>알람 영역</span></a></h3><figure><img src="'+S+'" alt="군집의 원칙에 따라 필터 기능을 한 곳으로 그룹화하여 알람의 상태, 즉 켜짐, 꺼짐, 이상 여부, 긴급도에 따라 쉽게 필터링할 수 있도록 개선했습니다." tabindex="0" loading="lazy"><figcaption>군집의 원칙에 따라 필터 기능을 한 곳으로 그룹화하여 알람의 상태, 즉 켜짐, 꺼짐, 이상 여부, 긴급도에 따라 쉽게 필터링할 수 있도록 개선했습니다.</figcaption></figure><h3 id="프로젝트-및-그룹-영역" tabindex="-1"><a class="header-anchor" href="#프로젝트-및-그룹-영역"><span>프로젝트 및 그룹 영역</span></a></h3><p>통일성의 원칙에 따라 프로젝트, 그룹, 알람 간의 사용자 경험을 통일했고, 이를 통해 예측 가능성을 높였습니다.</p><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="마치며" tabindex="-1"><a class="header-anchor" href="#마치며"><span>마치며</span></a></h2>',16),B={href:"https://guide.ncloud-docs.com/docs/ko/elsa2-overview",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"NELO는 4.0 버전에서 완전히 새로 개발되었기 때문에 아직도 가야 할 길이 많이 남아 있습니다. 다음 기회에는 개발자의 측면에서 겪었던 시행착오와 교훈을 공유하는 글로 찾아뵙겠습니다.",-1),M=e("figure",null,[e("img",{src:I,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Y={href:"https://d2.naver.com/news/9489625",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://d2.naver.com/news/2022848",target:"_blank",rel:"noopener noreferrer"};function J(r,W){const c=o("VPCard"),n=o("router-link"),h=o("SiteInfo"),g=o("VidStack"),s=o("FontIcon");return b(),d("div",null,[e("h1",V,[e("a",w,[e("span",null,m(r.$frontmatter.title)+" 관련",1)])]),t(c,f(u({title:"System Design > Article(s)",desc:"Article(s)",link:"/academics/system-design/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),e("nav",D,[e("ul",null,[e("li",null,[t(n,{to:"#리서치-시간이-없다-일단-개발부터"},{default:i(()=>[a("리서치? 시간이 없다! 일단 개발부터")]),_:1})]),e("li",null,[t(n,{to:"#nelo-4-0을-위한-3단계-ux-사전-진단-프로세스"},{default:i(()=>[a("NELO 4.0을 위한 3단계 UX 사전 진단 프로세스")]),_:1}),e("ul",null,[e("li",null,[t(n,{to:"#_1-휴리스틱-평가-무엇이-우선적으로-살펴야-하는-사용성-이슈일까"},{default:i(()=>[a('1. 휴리스틱 평가 - "무엇이 우선적으로 살펴야 하는 사용성 이슈일까?"')]),_:1})]),e("li",null,[t(n,{to:"#_2-이슈별-ux-개선-수준-진단-어디까지-개선하는-것이-가능할까"},{default:i(()=>[a('2. 이슈별 UX 개선 수준 진단 - "어디까지 개선하는 것이 가능할까?"')]),_:1})]),e("li",null,[t(n,{to:"#_3-ux-히스토리-취합-어떻게-개선되는-것을-원할까"},{default:i(()=>[a('3. UX 히스토리 취합 - "어떻게 개선되는 것을 원할까?"')]),_:1})])])]),e("li",null,[t(n,{to:"#_4가지-사용성-원칙"},{default:i(()=>[a("4가지 사용성 원칙")]),_:1}),e("ul",null,[e("li",null,[t(n,{to:"#_1-강약의-원칙-정보의-강-중-약에-따른-구조화로-가독성을-높인다"},{default:i(()=>[a('1. 강약의 원칙 - "정보의 강-중-약에 따른 구조화로 가독성을 높인다."')]),_:1})]),e("li",null,[t(n,{to:"#_2-군집의-원칙-유사-정보-유관-컴포넌트는-그룹화하여-직관성을-높인다"},{default:i(()=>[a('2. 군집의 원칙 - "유사 정보, 유관 컴포넌트는 그룹화하여 직관성을 높인다."')]),_:1})]),e("li",null,[t(n,{to:"#_3-통일성의-원칙-제품-전반의-사용자-경험을-통일해-예측-가능성을-높인다"},{default:i(()=>[a('3. 통일성의 원칙 - "제품 전반의 사용자 경험을 통일해 예측 가능성을 높인다"')]),_:1})]),e("li",null,[t(n,{to:"#_4-단순화의-원칙-정보와-사용자-여정의-단순화로-seamless한-경험을-제공한다"},{default:i(()=>[a('4. 단순화의 원칙 - "정보와 사용자 여정의 단순화로 seamless한 경험을 제공한다"')]),_:1})])])]),e("li",null,[t(n,{to:"#그래서-nelo-4-0은-어떻게-되었을까요"},{default:i(()=>[a("그래서 NELO 4.0은 어떻게 되었을까요?")]),_:1}),e("ul",null,[e("li",null,[t(n,{to:"#검색-영역"},{default:i(()=>[a("검색 영역")]),_:1})]),e("li",null,[t(n,{to:"#크래시-영역"},{default:i(()=>[a("크래시 영역")]),_:1})]),e("li",null,[t(n,{to:"#알람-영역"},{default:i(()=>[a("알람 영역")]),_:1})]),e("li",null,[t(n,{to:"#프로젝트-및-그룹-영역"},{default:i(()=>[a("프로젝트 및 그룹 영역")]),_:1})])])]),e("li",null,[t(n,{to:"#마치며"},{default:i(()=>[a("마치며")]),_:1})])])]),P,t(h,{name:"UX 원칙에 따른 NELO 4.0 개발기 | NAVER D2",desc:"UX 원칙에 따른 NELO 4.0 개발기",url:"https://d2.naver.com/helloworld/2461452",logo:"/assets/image/d2.naver.com/favicon.ico",preview:"/assets/image/d2.naver.com/2461452/banner.png"}),_(' <VidStack src="https://tv.naver.com/embed/51492213" /> '),t(g,{src:"youtube/KYrFxYog6QY"}),C,e("p",null,[a("Datadog 등의 경쟁 도구와 대등한 수준의 Lucene 쿼리 편집 기능을 지원하기 위해 "),e("a",F,[t(s,{icon:"fas fa-globe"}),a("PEG.JS")]),a(" 기반의 Lucene 쿼리 파서를 개발하고 Lucene AST 기반으로 언어 편집기를 개발했습니다. 이를 통해 검색 필드와 값, 그리고 Lucene 쿼리 연산자를 체계적으로 지원할 수 있게 되었고, 향후에 더욱 풍부한 사용자 경험을 제공할 수 있는 기반을 확보했습니다.")]),K,e("p",null,[a("UX 디자이너의 관점에서 UX 원칙을 활용해 NELO 4.0 개발을 어떻게 진행했는지 살펴보았습니다. NELO 4.0은 향후 NCP를 통해 "),e("a",B,[t(s,{icon:"iconfont icon-naver"}),a("Effective Log Search & Analytics 2.0")]),a("으로 서비스될 예정입니다. NELO에 관심이 있다면 이후 직접 사용해볼 수 있습니다.")]),j,M,e("p",null,[a("해당 글은 "),e("a",Y,[t(s,{icon:"iconfont icon-naver"}),a("N INNOVATION AWARD 2023")]),a(" 특집편으로 출품작 'NELO 4.0: 클라우드 서비스를 위한 전사 로깅 시스템'에 대해 Storage Platform 팀에서 작성해주셨습니다.")]),e("p",null,[a("."),e("a",Z,[t(s,{icon:"iconfont icon-naver"}),a("Tech Radio : FE 개발자와 디자이너의 협업")]),a(" 을 통해 NELO 4.0를 만드는 사람들의 이야기도 함께 만나보세요.")])])}const $=p(T,[["render",J],["__file","2461452.html.vue"]]),H=JSON.parse('{"path":"/d2.naver.com/2461452.html","title":"UX 원칙에 따른 NELO 4.0 개발기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"UX 원칙에 따른 NELO 4.0 개발기","description":"Article(s) > UX 원칙에 따른 NELO 4.0 개발기","icon":"fas fa-pen-ruler","category":["Design","System","Article(s)"],"tag":["blog","d2.naver.com","system","design","umon"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > UX 원칙에 따른 NELO 4.0 개발기"},{"property":"og:description","content":"UX 원칙에 따른 NELO 4.0 개발기"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/d2.naver.com/2461452.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/d2.naver.com/2461452.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"UX 원칙에 따른 NELO 4.0 개발기"}],["meta",{"property":"og:description","content":"Article(s) > UX 원칙에 따른 NELO 4.0 개발기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/banner.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/banner.png"}],["meta",{"name":"twitter:image:alt","content":"UX 원칙에 따른 NELO 4.0 개발기"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"d2.naver.com"}],["meta",{"property":"article:tag","content":"system"}],["meta",{"property":"article:tag","content":"design"}],["meta",{"property":"article:tag","content":"umon"}],["meta",{"property":"article:published_time","content":"2024-05-17T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UX 원칙에 따른 NELO 4.0 개발기\\",\\"image\\":[\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/1.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/2.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/3.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/4.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/5.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/6.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/7.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/8.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/9.gif\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/10.gif\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/11.gif\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/12.gif\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/13.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/14.gif\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/15.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/d2.naver.com/2461452/16.png\\"],\\"datePublished\\":\\"2024-05-17T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/academics/system-design/articles/README.md","date":"2024-05-17T00:00:00.000Z","isOriginal":false,"cover":"/assets/image/d2.naver.com/2461452/banner.png"},"headers":[{"level":2,"title":"리서치? 시간이 없다! 일단 개발부터","slug":"리서치-시간이-없다-일단-개발부터","link":"#리서치-시간이-없다-일단-개발부터","children":[]},{"level":2,"title":"NELO 4.0을 위한 3단계 UX 사전 진단 프로세스","slug":"nelo-4-0을-위한-3단계-ux-사전-진단-프로세스","link":"#nelo-4-0을-위한-3단계-ux-사전-진단-프로세스","children":[{"level":3,"title":"1. 휴리스틱 평가 - \\"무엇이 우선적으로 살펴야 하는 사용성 이슈일까?\\"","slug":"_1-휴리스틱-평가-무엇이-우선적으로-살펴야-하는-사용성-이슈일까","link":"#_1-휴리스틱-평가-무엇이-우선적으로-살펴야-하는-사용성-이슈일까","children":[]},{"level":3,"title":"2. 이슈별 UX 개선 수준 진단 - \\"어디까지 개선하는 것이 가능할까?\\"","slug":"_2-이슈별-ux-개선-수준-진단-어디까지-개선하는-것이-가능할까","link":"#_2-이슈별-ux-개선-수준-진단-어디까지-개선하는-것이-가능할까","children":[]},{"level":3,"title":"3. UX 히스토리 취합 - \\"어떻게 개선되는 것을 원할까?\\"","slug":"_3-ux-히스토리-취합-어떻게-개선되는-것을-원할까","link":"#_3-ux-히스토리-취합-어떻게-개선되는-것을-원할까","children":[]}]},{"level":2,"title":"4가지 사용성 원칙","slug":"_4가지-사용성-원칙","link":"#_4가지-사용성-원칙","children":[{"level":3,"title":"1. 강약의 원칙 - \\"정보의 강-중-약에 따른 구조화로 가독성을 높인다.\\"","slug":"_1-강약의-원칙-정보의-강-중-약에-따른-구조화로-가독성을-높인다","link":"#_1-강약의-원칙-정보의-강-중-약에-따른-구조화로-가독성을-높인다","children":[]},{"level":3,"title":"2. 군집의 원칙 - \\"유사 정보, 유관 컴포넌트는 그룹화하여 직관성을 높인다.\\"","slug":"_2-군집의-원칙-유사-정보-유관-컴포넌트는-그룹화하여-직관성을-높인다","link":"#_2-군집의-원칙-유사-정보-유관-컴포넌트는-그룹화하여-직관성을-높인다","children":[]},{"level":3,"title":"3. 통일성의 원칙 - \\"제품 전반의 사용자 경험을 통일해 예측 가능성을 높인다\\"","slug":"_3-통일성의-원칙-제품-전반의-사용자-경험을-통일해-예측-가능성을-높인다","link":"#_3-통일성의-원칙-제품-전반의-사용자-경험을-통일해-예측-가능성을-높인다","children":[]},{"level":3,"title":"4. 단순화의 원칙 - \\"정보와 사용자 여정의 단순화로 seamless한 경험을 제공한다\\"","slug":"_4-단순화의-원칙-정보와-사용자-여정의-단순화로-seamless한-경험을-제공한다","link":"#_4-단순화의-원칙-정보와-사용자-여정의-단순화로-seamless한-경험을-제공한다","children":[]}]},{"level":2,"title":"그래서 NELO 4.0은 어떻게 되었을까요?","slug":"그래서-nelo-4-0은-어떻게-되었을까요","link":"#그래서-nelo-4-0은-어떻게-되었을까요","children":[{"level":3,"title":"검색 영역","slug":"검색-영역","link":"#검색-영역","children":[]},{"level":3,"title":"크래시 영역","slug":"크래시-영역","link":"#크래시-영역","children":[]},{"level":3,"title":"알람 영역","slug":"알람-영역","link":"#알람-영역","children":[]},{"level":3,"title":"프로젝트 및 그룹 영역","slug":"프로젝트-및-그룹-영역","link":"#프로젝트-및-그룹-영역","children":[]}]},{"level":2,"title":"마치며","slug":"마치며","link":"#마치며","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.32,"words":395},"filePathRelative":"d2.naver.com/2461452.md","localizedDate":"2024년 5월 17일","excerpt":"\\n"}');export{$ as comp,H as data};
