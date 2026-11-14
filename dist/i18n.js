// Presentation-only translations. The financial model is shared by both languages.
const I18n = (() => {
 const hebrew = {
 "Retirement planner": "תכנון פרישה",
 "Your insights": "התובנות שלך",
 "● Your numbers stay on this device": "● הנתונים שלך נשארים במכשיר הזה",
 "Your next chapter.": "הפרק הבא בחיים שלך.",
 "On your terms.": "בתנאים שלך.",
 "THE GOAL": "המטרה",
 "More life. Less 9–5.": "יותר חיים. פחות עבודה.",
 "Let’s map your freedom": "בואו נתכנן את החופש שלך",
 "↺ Reset all": "↺ איפוס הכול",
 "Your starting point": "נקודת ההתחלה שלך",
 "TODAY": "היום",
 "Your age": "הגיל שלך",
 "years": "שנים",
 "Annual take-home income": "הכנסה שנתית נטו",
 "Annual living expenses (today)": "הוצאות מחיה שנתיות כיום",
 "Annual amount you invest": "סכום ההשקעה השנתי שלך",
 "Available to invest / year": "סכום פנוי להשקעה בשנה",
 "Take-home income − living expenses": "הכנסה נטו פחות הוצאות מחיה",
 "Your investments": "ההשקעות שלך",
 "BALANCE ANNUAL RETURN": "יתרה · תשואה שנתית",
 "Your other assets": "הנכסים הנוספים שלך",
 "Part of your net worth": "חלק מהשווי הנקי שלך",
 "Home value": "שווי הבית",
 "Car 1": "רכב 1",
 "Car 2": "רכב 2",
 "Car 3": "רכב 3",
 "ⓘ Home and cars count toward assets, but aren’t used to fund retirement. Values are before debts.": "ⓘ הבית וכלי הרכב נכללים בשווי הנכסים, אך אינם משמשים למימון הפרישה. השווי מוצג לפני ניכוי חובות.",
 "The life you’re planning": "החיים שאתה מתכנן",
 "TOMORROW": "מחר",
 "I want to stop working at": "אני רוצה להפסיק לעבוד בגיל",
 "years old": "שנים",
 "Annual retirement expenses": "הוצאות שנתיות בפרישה",
 "Enter the yearly budget you want, including any extra cushion.": "יש להזין את התקציב השנתי הרצוי, כולל מרווח ביטחון.",
 "Social Security starts at": "גיל תחילת קצבת הביטוח הלאומי בארה״ב",
 "Monthly Social Security": "קצבת ביטוח לאומי חודשית בארה״ב",
 "Expected monthly after-tax amount.": "הסכום החודשי הצפוי לאחר מס.",
 "Passive income during retirement": "הכנסה פסיבית בפרישה",
 "Annual after-tax income, such as rent or royalties.": "הכנסה שנתית לאחר מס, למשל משכר דירה או מתמלוגים.",
 "● YOUR FREEDOM SNAPSHOT": "● תמונת החופש שלך",
 "Your planned retirement age": "גיל הפרישה המתוכנן שלך",
 "young.": "של חופש.",
 "Earliest funded retirement": "גיל הפרישה המוקדם הממומן",
 "spending covered through age 100": "מימון הוצאות עד גיל 100",
 "Investments at retirement": "שווי ההשקעות במועד הפרישה",
 "Monthly spending goal": "יעד הוצאות חודשי",
 "at retirement": "במועד הפרישה",
 "Monthly passive income": "הכנסה פסיבית חודשית",
 "Modeled monthly budget": "תקציב חודשי לפי המודל",
 "funded through age 100": "ממומן עד גיל 100",
 "A plan for more of what matters.": "תוכנית ליותר ממה שחשוב לך.",
 "YOUR WEALTH TODAY": "שווי הנכסים שלך כיום",
 "Investments": "השקעות",
 "Other assets": "נכסים אחרים",
 "Small changes. More possibilities.": "שינויים קטנים. יותר אפשרויות.",
 "Move your retirement age to see how a few extra years can reshape your future.": "שנה את גיל הפרישה כדי לראות איך כמה שנים נוספות יכולות להשפיע על העתיד שלך.",
 "THE BIG PICTURE": "התמונה הגדולה",
 "See your future take shape.": "לראות את העתיד שלך מקבל צורה.",
 "Your wealth journey": "מסלול ההשקעות שלך",
 "Investment balance, from now to age 100": "יתרת ההשקעות מהיום ועד גיל 100",
 "Investment balance": "יתרת השקעות",
 "Dashed line = retirement": "קו מקווקו = מועד הפרישה",
 "Your retirement income": "ההכנסה שלך בפרישה",
 "Annual income at retirement": "הכנסה שנתית במועד הפרישה",
 "YOUR YEAR-BY-YEAR INCOME": "ההכנסה שלך בכל שנה",
 "Savings withdrawals & Social Security": "משיכות מהחיסכון וקצבת ביטוח לאומי בארה״ב",
 "See how much you need from savings and how much Social Security pays each year.": "ראה כמה צריך למשוך מהחיסכון וכמה משלמת קצבת הביטוח הלאומי בארה״ב בכל שנה.",
 "Your retirement years": "שנות הפרישה שלך",
 "Annual amounts based on the figures you enter.": "סכומים שנתיים המבוססים על הנתונים שהזנת.",
 "Needed from savings / year": "נדרש מהחיסכון בשנה",
 "Social Security / year": "קצבת ביטוח לאומי בארה״ב בשנה",
 "Total spending / year": "סך ההוצאות בשנה",
 "Needed from savings": "נדרש מהחיסכון",
 "Social Security": "ביטוח לאומי בארה״ב",
 "Unfunded part of savings withdrawal": "החלק במשיכה שאין לו כיסוי בחיסכון",
 "Select or hover over a year for exact amounts. Scroll sideways to see every year through age 100. Savings needed = spending − Social Security − other passive income, with a minimum of $0. Hatched bars show amounts your remaining savings cannot cover.": "בחר שנה או העבר מעליה את הסמן להצגת סכומים מדויקים. גלול לצדדים כדי לראות את כל השנים עד גיל 100. הסכום הנדרש מהחיסכון הוא ההוצאות פחות קצבת הביטוח הלאומי בארה״ב ופחות הכנסה פסיבית אחרת, ולא פחות מאפס. עמודות עם פסים מסמנות סכומים שהחיסכון שנותר אינו יכול לכסות.",
 "How your projection works": "איך התחזית מחושבת",
 "Annual projections through age 100 use constant returns. Growth is applied before year-end contributions or withdrawals. Annual savings are split in proportion to current balances, or equally when all are zero. Withdrawals are taken proportionally. Expenses and passive income stay at the annual amounts you enter. Social Security stays at the monthly amount you enter. Social Security starts at the selected age. Current annual income and living expenses show how much is available to invest. Only the annual amount you choose to invest is added to savings; retirement expenses are entered separately.": "התחזית השנתית עד גיל 100 מניחה תשואה קבועה. התשואה מחושבת לפני הפקדות או משיכות בסוף השנה. ההפקדות השנתיות מחולקות ביחס ליתרות הקיימות, או באופן שווה אם כל היתרות אפס. המשיכות מחולקות באותו יחס. ההוצאות וההכנסה הפסיבית נשארות בסכומים השנתיים שהזנת. קצבת הביטוח הלאומי בארה״ב נשארת בסכום החודשי שהזנת ומתחילה בגיל שבחרת. ההכנסה השנתית והוצאות המחיה כיום מראות כמה כסף פנוי להשקעה. רק סכום ההשקעה השנתי שבחרת מתווסף לחיסכון; הוצאות הפרישה מוזנות בנפרד.",
 "Home and cars aren’t sold. Debts, market volatility, taxes on investment gains or withdrawals, fees, and account access restrictions are not modeled. Early 401(k) withdrawals may have restrictions or penalties. Enter after-tax passive income and Social Security estimates. The income chart shows the withdrawals needed to meet your spending goal, not guaranteed sustainable income. Projections are illustrative, not financial advice.": "המודל אינו מניח מכירה של הבית או כלי הרכב. הוא אינו כולל חובות, תנודתיות בשוק, מיסוי רווחי השקעות או משיכות, עמלות והגבלות גישה לחשבונות. משיכה מוקדמת מחשבון 401(k) אמריקאי עשויה להיות כפופה להגבלות או לקנסות. יש להזין אומדני הכנסה פסיבית וקצבת ביטוח לאומי בארה״ב לאחר מס. תרשים ההכנסות מציג את המשיכות הנדרשות לעמידה ביעד ההוצאות, ולא הכנסה מובטחת לאורך זמן. התחזיות הן להמחשה בלבד ואינן ייעוץ פיננסי.",
 "A future worth looking forward to.": "עתיד שכדאי לצפות לו.",
 "Built for your next chapter. ↗": "נבנה לפרק הבא בחיים שלך. ↗",
 "Freedom — Your retirement, on your terms": "Freedom — הפרישה שלך, בתנאים שלך",
 "Explore your retirement age, savings, and passive income with Freedom.": "תכנן את גיל הפרישה, החיסכון וההכנסה הפסיבית שלך עם Freedom.",
 "Scrollable annual income chart": "תרשים הכנסה שנתית הניתן לגלילה",
 "Stocks & ETFs": "מניות וקרנות סל",
 "Money market": "קרן כספית",
 "401(k)": "תוכנית ⁦401(k)⁩",
 "{asset} balance": "יתרת {asset}",
 "{asset} annual return": "תשואה שנתית של {asset}",
 "Start by entering your plan": "מתחילים בהזנת פרטי התוכנית",
 "Your next chapter starts with a plan": "הפרק הבא מתחיל בתוכנית",
 "Enter your Social Security starting age to complete your projection.": "יש להזין את גיל תחילת קצבת הביטוח הלאומי בארה״ב להשלמת התחזית.",
 "Enter your age and retirement age to calculate your projection.": "יש להזין את גילך ואת גיל הפרישה לחישוב התחזית.",
 "Enter your current age (18 or older).": "יש להזין גיל נוכחי של 18 ומעלה.",
 "Choose a retirement age at or after your current age.": "יש לבחור גיל פרישה שאינו מוקדם מהגיל הנוכחי.",
 "Enter a Social Security starting age (18 or older).": "יש להזין גיל תחילת קצבת ביטוח לאומי בארה״ב של 18 ומעלה.",
 "Investment balance chart awaiting your plan": "תרשים יתרת השקעות הממתין לפרטי התוכנית",
 "Investment balance chart — enter your ages to calculate a projection": "תרשים יתרת השקעות — יש להזין גיל לחישוב התחזית",
 "Today": "היום",
 "Future": "בעתיד",
 "Enter your ages to project": "הזן גיל נוכחי וגיל פרישה",
 "your investment balance": "לתחזית יתרת ההשקעות",
 "Annual cash-flow shortfall": "גירעון בתזרים השנתי",
 "Your current living expenses exceed your take-home income.": "הוצאות המחיה הנוכחיות שלך גבוהות מההכנסה נטו.",
 "Your annual investment amount exceeds the income left after living expenses. Check whether other funding covers the difference.": "סכום ההשקעה השנתי גבוה מההכנסה שנותרת לאחר הוצאות המחיה. יש לבדוק אם מקור מימון נוסף מכסה את ההפרש.",
 "Your next chapter starts today": "הפרק הבא בחיים מתחיל היום",
 "{years} years to your next chapter": "עוד {years} שנים לפרק הבא בחיים שלך",
 "Your money lasts through age 100": "הכסף שלך מספיק עד גיל 100",
 "Investments run short at age {age}": "ההשקעות אינן מספיקות החל מגיל {age}",
 "Your spending is covered through our projection, with {amount} remaining at 100.": "ההוצאות שלך ממומנות לאורך התחזית, עם יתרה של {amount} בגיל 100.",
 "Your planned spending exceeds available income and savings {years} years into retirement.": "ההוצאות המתוכננות גבוהות מההכנסה ומהחיסכון הזמינים לאחר {years} שנות פרישה.",
 "This model includes your 401(k). Early access restrictions and penalties are not modeled.": "המודל כולל את חשבון 401(k) האמריקאי שלך. הגבלות וקנסות על משיכה מוקדמת אינם נכללים בחישוב.",
 "Beyond 99": "אחרי גיל 99",
 "Age {age}": "גיל {age}",
 "Projected investment balance from age {age} to 100": "תחזית יתרת ההשקעות מגיל {age} עד גיל 100",
 "Investment withdrawals": "משיכות מההשקעות",
 "Passive income": "הכנסה פסיבית",
 "Annual retirement income sources": "מקורות ההכנסה השנתית בפרישה",
 "PER YEAR": "בשנה",
 "Annual income needed at age {age}": "הכנסה שנתית נדרשת בגיל {age}",
 "{year} · Age {age}": "{year} · גיל {age}",
 "Other passive income: {amount} / year.": "הכנסה פסיבית נוספת: {amount} בשנה.",
 "Savings cannot cover {shortfall} of the required withdrawal in {year}. Available savings cover {withdrawal}.": "החיסכון אינו יכול לכסות {shortfall} מהמשיכה הנדרשת בשנת {year}. החיסכון הזמין מכסה {withdrawal}.",
 "Year-by-year savings withdrawal and Social Security chart awaiting your plan": "תרשים משיכות שנתיות מהחיסכון וקצבת ביטוח לאומי בארה״ב, הממתין לפרטי התוכנית",
 "Enter your ages and spending to see each retirement year": "הזן גיל והוצאות כדי לראות את כל שנות הפרישה",
 "Savings withdrawals + Social Security": "משיכות מהחיסכון וקצבת ביטוח לאומי בארה״ב",
 "{year}, age {age}. Required savings withdrawal {savings}. Social Security {social}. Spending {spending}.": "{year}, גיל {age}. משיכה נדרשת מהחיסכון: {savings}. קצבת ביטוח לאומי בארה״ב: {social}. הוצאות: {spending}.",
 " Unfunded withdrawal {amount}.": " משיכה ללא כיסוי: {amount}.",
 "Annual required savings withdrawals and Social Security from age {age} through age 100": "משיכות שנתיות נדרשות מהחיסכון וקצבת ביטוח לאומי בארה״ב מגיל {age} עד גיל 100",
 "m": "מ׳",
 "k": "א׳"
};
 let language = 'en';
 const normalize = value => value.replace(/\s+/g, ' ').trim();
 const translate = (key, values = {}) => (language === 'he' ? hebrew[key] || key : key).replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? `{${name}}`));
 const nodes = [];
 const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
 while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script, style, #language-toggle')) continue;
  const key = normalize(node.nodeValue);
  if (hebrew[key]) nodes.push({node, original: node.nodeValue, key});
 }
 const attributes = [...document.querySelectorAll('[aria-label]')].map(node => ({node, original: node.getAttribute('aria-label')}));
 function setLanguage(next, remember = true) {
  language = next === 'he' ? 'he' : 'en';
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
  document.title = translate('Freedom — Your retirement, on your terms');
  document.querySelector('meta[name="description"]').content = translate('Explore your retirement age, savings, and passive income with Freedom.');
  for (const {node, original, key} of nodes) node.nodeValue = language === 'he' ? translate(key) : original;
  for (const {node, original} of attributes) node.setAttribute('aria-label', translate(original));
  const button = document.getElementById('language-toggle');
  button.textContent = language === 'he' ? 'English' : 'עברית';
  button.lang = language === 'he' ? 'en' : 'he';
  button.setAttribute('aria-label', language === 'he' ? 'Switch to English' : 'מעבר לעברית');
  button.setAttribute('aria-pressed', String(language === 'he'));
  if (remember) { try { localStorage.setItem('freedom-language', language); } catch {} }
  document.dispatchEvent(new CustomEvent('freedom-language-change'));
 }
 let initial = 'en';
 try { initial = new URLSearchParams(location.search).get('lang') || localStorage.getItem('freedom-language') || 'en'; } catch {}
 document.getElementById('language-toggle').addEventListener('click', () => setLanguage(language === 'he' ? 'en' : 'he'));
 setLanguage(initial, false);
 return {t: translate, setLanguage, get language() { return language; }, get locale() { return language === 'he' ? 'he-IL' : 'en-US'; }};
})();
const t = (key, values) => I18n.t(key, values);
