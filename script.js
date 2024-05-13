//   var acc = $(".button-67");
//   for (var i = 0; i < acc.length; i++) {
//     acc[i].on("click", function () {
//       var panel = this.next();
//       if (panel.hasClass('hidden'))
//         panel.toggleClass('hidden');
//     else
//         panel.toggleClass('hidden');
//     });
//   }
$(document).ready(function () {
  var preAward = $("#pre-award");
  var preAwardContent = $("#pre-award-cont");
  var awardMgmt = $('#award-mgmt');
  var awardMgmtContent = $('#award-mgmt-cont');
  var finance = $('#finance');
  var financeContent = $('#finance-cont');
  var recruitment = $('#recruitment');
  var recruitmentContent = $('#recruitment-cont');
  var onboarding = $('#onboarding');
  var onboardingContent = $('#onboarding-cont');
  var hrTransact = $('#hr-transact');
  var hrTransactContent = $('#hr-transact-cont');
  var ecrt = $('#ecrt');
  var ecrtContent = $('#ecrt-cont');

  preAward.on("click", function () {
    if (preAwardContent.css("display") == "none")
      preAwardContent.css("display", "block");
    else preAwardContent.css("display", "none");

    awardMgmtContent.css('display') == 'block' ? awardMgmtContent.css('display', 'none') : awardMgmtContent.css('display', 'none');
    financeContent.css('display') == 'block' ? financeContent.css('display', 'none') : financeContent.css('display', 'none');
    recruitmentContent.css('display') == 'block' ? recruitmentContent.css('display', 'none') : recruitmentContent.css('display', 'none');
    onboardingContent.css('display') == 'block' ? onboardingContent.css('display', 'none') : onboardingContent.css('display', 'none');
    hrTransactContent.css('display') == 'block' ? hrTransactContent.css('display', 'none') : hrTransactContent.css('display', 'none');
    ecrtContent.css('display') == 'block' ? ecrtContent.css('display', 'none') : ecrtContent.css('display', 'none');
  });

  awardMgmt.on("click", function () {
    if (awardMgmtContent.css("display") == "none")
      awardMgmtContent.css("display", "block");
    else awardMgmtContent.css("display", "none");

    preAwardContent.css('display') == 'block' ? preAwardContent.css('display', 'none') : preAwardContent.css('display', 'none');
    financeContent.css('display') == 'block' ? financeContent.css('display', 'none') : financeContent.css('display', 'none');
    recruitmentContent.css('display') == 'block' ? recruitmentContent.css('display', 'none') : recruitmentContent.css('display', 'none');
    onboardingContent.css('display') == 'block' ? onboardingContent.css('display', 'none') : onboardingContent.css('display', 'none');
    hrTransactContent.css('display') == 'block' ? hrTransactContent.css('display', 'none') : hrTransactContent.css('display', 'none');
    ecrtContent.css('display') == 'block' ? ecrtContent.css('display', 'none') : ecrtContent.css('display', 'none');
  });

  finance.on("click", function () {
    if (financeContent.css("display") == "none")
      financeContent.css("display", "block");
    else financeContent.css("display", "none");

    preAwardContent.css('display') == 'block' ? preAwardContent.css('display', 'none') : preAwardContent.css('display', 'none');
    awardMgmtContent.css('display') == 'block' ? awardMgmtContent.css('display', 'none') : awardMgmtContent.css('display', 'none');
    recruitmentContent.css('display') == 'block' ? recruitmentContent.css('display', 'none') : recruitmentContent.css('display', 'none');
    onboardingContent.css('display') == 'block' ? onboardingContent.css('display', 'none') : onboardingContent.css('display', 'none');
    hrTransactContent.css('display') == 'block' ? hrTransactContent.css('display', 'none') : hrTransactContent.css('display', 'none');
    ecrtContent.css('display') == 'block' ? ecrtContent.css('display', 'none') : ecrtContent.css('display', 'none');
  });

  recruitment.on("click", function () {
    if (recruitmentContent.css("display") == "none")
      recruitmentContent.css("display", "block");
    else recruitmentContent.css("display", "none");

    preAwardContent.css('display') == 'block' ? preAwardContent.css('display', 'none') : preAwardContent.css('display', 'none');
    awardMgmtContent.css('display') == 'block' ? awardMgmtContent.css('display', 'none') : awardMgmtContent.css('display', 'none');
    financeContent.css('display') == 'block' ? financeContent.css('display', 'none') : financeContent.css('display', 'none');
    onboardingContent.css('display') == 'block' ? onboardingContent.css('display', 'none') : onboardingContent.css('display', 'none');
    hrTransactContent.css('display') == 'block' ? hrTransactContent.css('display', 'none') : hrTransactContent.css('display', 'none');
    ecrtContent.css('display') == 'block' ? ecrtContent.css('display', 'none') : ecrtContent.css('display', 'none');
  });  

  onboarding.on("click", function () {
    if (onboardingContent.css("display") == "none")
      onboardingContent.css("display", "block");
    else onboardingContent.css("display", "none");

    preAwardContent.css('display') == 'block' ? preAwardContent.css('display', 'none') : preAwardContent.css('display', 'none');
    awardMgmtContent.css('display') == 'block' ? awardMgmtContent.css('display', 'none') : awardMgmtContent.css('display', 'none');
    financeContent.css('display') == 'block' ? financeContent.css('display', 'none') : financeContent.css('display', 'none');
    recruitmentContent.css('display') == 'block' ? recruitmentContent.css('display', 'none') : recruitmentContent.css('display', 'none');
    hrTransactContent.css('display') == 'block' ? hrTransactContent.css('display', 'none') : hrTransactContent.css('display', 'none');
    ecrtContent.css('display') == 'block' ? ecrtContent.css('display', 'none') : ecrtContent.css('display', 'none');
  });  

  hrTransact.on("click", function () {
    if (hrTransactContent.css("display") == "none")
      hrTransactContent.css("display", "block");
    else hrTransactContent.css("display", "none");

    preAwardContent.css('display') == 'block' ? preAwardContent.css('display', 'none') : preAwardContent.css('display', 'none');
    awardMgmtContent.css('display') == 'block' ? awardMgmtContent.css('display', 'none') : awardMgmtContent.css('display', 'none');
    financeContent.css('display') == 'block' ? financeContent.css('display', 'none') : financeContent.css('display', 'none');
    recruitmentContent.css('display') == 'block' ? recruitmentContent.css('display', 'none') : recruitmentContent.css('display', 'none');
    onboardingContent.css('display') == 'block' ? onboardingContent.css('display', 'none') : onboardingContent.css('display', 'none');
    ecrtContent.css('display') == 'block' ? ecrtContent.css('display', 'none') : ecrtContent.css('display', 'none');
  }); 

  ecrt.on("click", function () {
    if (ecrtContent.css("display") == "none")
      ecrtContent.css("display", "block");
    else ecrtContent.css("display", "none");

    preAwardContent.css('display') == 'block' ? preAwardContent.css('display', 'none') : preAwardContent.css('display', 'none');
    awardMgmtContent.css('display') == 'block' ? awardMgmtContent.css('display', 'none') : awardMgmtContent.css('display', 'none');
    financeContent.css('display') == 'block' ? financeContent.css('display', 'none') : financeContent.css('display', 'none');
    recruitmentContent.css('display') == 'block' ? recruitmentContent.css('display', 'none') : recruitmentContent.css('display', 'none');
    onboardingContent.css('display') == 'block' ? onboardingContent.css('display', 'none') : onboardingContent.css('display', 'none');
    hrTransactContent.css('display') == 'block' ? hrTransactContent.css('display', 'none') : hrTransactContent.css('display', 'none');
  }); 
});

var horizontalAccordions = $(".accordion.width");

horizontalAccordions.each(function () {
  var accordion = $(this);
  var collapse = accordion.find(".collapse");
  var bodies = collapse.find("> *");
  accordion.height(accordion.height());
  bodies.width(bodies.eq(0).width());
  collapse.not(".show").each(function () {
    $(this).parent().find("[data-toggle='collapse']").addClass("collapsed");
  });
});
