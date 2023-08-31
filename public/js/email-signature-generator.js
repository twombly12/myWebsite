let imageInput = "/assets/portrait.jpg";
// let squarePortrait = 'false';
// let circlePortrait = 'true';
let signOffInput = "Regards, John";
let nameInput = "John Smith";
let titleInput = "Chief Executive Officer";
let phoneInput = "555-123-4567";
let emailInput = "john@dashinteractive.ca";

let locationInput = "Toronto, Canada";
let websiteInput = "DashInteractive.ca";
let quoteInput = "Fear doesn't shut you down; it wakes you up";
let authorInput = "Veronica Roth";

let quoteLine = quoteInput + " - " + authorInput;
let quotePadding = 10;

let facebookInput = 'https://www.facebook.com';
let twitterInput = 'https://www.twitter.com';
let linkedinInput = 'https://www.linkedin.com';
let instagramInput = 'https://www.instagram.com';

let logoInput = "/assets/Dash Logo Colours-purple.png"

let colorInput = "rgb(133 77 255 / 1)"


function phoneFormat(phone) {
    phone = phone.split('')
    let lastFour = phone.splice(-4).join('');
    let secondThree = phone.splice(-3).join('');
    let firstThree = phone.splice(-3).join('');
    return `${phone.join('')} ${firstThree}-${secondThree}-${lastFour}`
}

let phoneEntered = '';

function internationalPhone() {
    const phoneInputField = document.querySelector("#phoneNumber");
    phoneEntered = window.intlTelInput(phoneInputField, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
}

internationalPhone()

function websitePrefix(website) {
    if (website.slice(0, 8) == 'https://') {
        website = website.split('').splice(8, website.length - 8);
        website = website.join('');
    } else if (website.slice(0, 7) == 'http://') {
        website = website.split('').splice(7, website.length - 7);
        website = website.join('');
    }
    return website
}

/-------------------------- Submit info from form --------------------------/

function submitInfo() {

    if (logoUrl.src == '') {
        alert('Please add a Logo');
        return
    }

    let portraitSlot = 'portraitSlot';
    let logoSlot = 'logoSlot';

    if (portraitUrl.src == '') {
        logoUrl.src = resizeImage(logoUrl, portraitSlot)
        imageInput = logoUrl.src;
        logoInput = '';
    } else {
        portraitUrl.src = resizeImage(portraitUrl, portraitSlot)
        imageInput = portraitUrl.src;
        logoUrl.src = resizeImage(logoUrl, logoSlot)
        logoInput = logoUrl.src;
    }

    // squarePortrait = document.querySelector('#square-portrait').checked;
    // circlePortrait = document.querySelector('#circle-portrait').checked;

    // console.log(squarePortrait, circlePortrait)

    signOffInput = document.getElementById('signOff').value;
    nameInput = document.getElementById('name').value;
    titleInput = document.getElementById('title').value;
    phoneInput = phoneFormat(phoneEntered.getNumber());
    emailInput = document.getElementById('emailAddress').value;
    locationInput = document.getElementById('location').value;
    websiteInput = websitePrefix(document.querySelector('#website').value);
    quoteInput = document.getElementById('quote').value;
    authorInput = document.getElementById('author').value;
    if (quoteInput === "") {
        // quotePadding = 0;
        quoteLine = "";
    } else {
        // quotePadding = 10;
        quoteLine = quoteInput + " - " + authorInput;
    }
    facebookInput = websitePrefix(document.querySelector('#facebook').value);
    twitterInput = websitePrefix(document.querySelector('#twitter').value);
    linkedinInput = websitePrefix(document.querySelector('#linkedIn').value);
    instagramInput = websitePrefix(document.querySelector('#instagram').value);
    colorInput = document.querySelector('#color-background-input').value


    previewSignature();
}




// Dropbox
// https://www.dropbox.com/s/g2pwm9mpu6kgsqv/Parker%20Pup.png?dl=0
// https://www.dropbox.com/s/g2pwm9mpu6kgsqv/Parker%20Pup.png?raw=1

// Google Drive
// https://drive.google.com/file/d/1oa5VABzp0-us5YMzg6N6m64y_L1gZ4mB/view?usp=sharing
// https://drive.google.com/uc?export=view&id=1oa5VABzp0-us5YMzg6N6m64y_L1gZ4mB

// One Drive
// https://1drv.ms/u/s!Am2vlsJxeudHgRTHAt0LgA2OHQhQ
// https://dsm01pap001files.storage.live.com/y4mJyoUn3z2aeB4lrEACSbRlv7gwYQQpddv1i1xD_ZOw1HObS-bS0l_6ykM5l2t0DqQpRmkaN5y61Jlocf2_ixh6OcWG1dj0S2UqsZILYbY4Df2o2jDandHs6sTgwbgkMEwUDwx0hfZG8F-cV0nK_HP8KfzZwHcBPVQoprV6V1Xc4V4loA8MhT4HonznpbvbEaw?width=5000&height=5000&cropmode=none





// /* Only for Image uploads*/
// function currateImageLink(imageLink) {
//     if (imageLink.includes('dropbox')) {
//         imageLink = imageLink.replace("dl=0", "raw=1");
//         return imageLink;
//     }
//     if (imageLink.includes('drive.google')) {
//         imageLink = imageLink.replace("/file/d/", "/uc?export=view&id=");
//         imageLink = imageLink.replace("/view?usp=sharing", "");
//         return imageLink;
//     }
//     if (imageLink.includes('storage.live.com')) {
//         return imageLink;
//     }
// }

function generateLogo() {
    let logo = '';

    if (logoInput != '') {
        logo = `<td style="box-sizing:border-box;padding:0px;border:0px;vertical-align:top"><img src="${logoInput}"
        role="presentation" style="box-sizing:border-box;border-style:none;display:inline-block;" class="CToWUd" data-bit="iit"></td>`
    }

    return logo
}

function generateContactInfo() {
    let phone = '';
    let email = '';
    let website = '';
    let location = '';

    if (phoneEntered.getNumber() != '' || phoneInput != ' --') {
        phone = `<tr height="20" style="box-sizing:border-box;margin:0px;padding:0px;border:0px;vertical-align:middle">
            <td width="30" style="box-sizing:border-box;padding:0px;border:0px;vertical-align:middle">
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:30px;vertical-align:-webkit-baseline-middle">
                    <tbody style="box-sizing:border-box">
                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                            <td style="box-sizing:border-box;padding:0px;border:0px;vertical-align:bottom"><span color="#f2547d" width="11" style="box-sizing:border-box;display:inline-block;background-color:${colorInput}"><img src="https://ci6.googleusercontent.com/proxy/Xq3hntJEq2rjJzR0uWCVm3clsSla7NsI7xyRuy0B6esGxKEs0TJKSCBJd0PTJnw80_-gOm3yRwJoGtSWipm4TqjnmSCEllHm6WPq2oze68mmA8DO6Mj2dGBHroByKflVGCBL0c-wyQ3vCF92=s0-d-e1-ft#https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#f2547d" alt="mobilePhone" width="13" style="box-sizing:border-box;border-style:none;display:block" class="CToWUd" data-bit="iit"></span></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td style="box-sizing:border-box;padding:0px;border:0px;color:rgb(0,0,0)"><a href="tel:${phoneInput}" color="#000000" style="box-sizing:border-box;background-color:rgba(0,0,0,0);text-decoration-line:none;color:rgb(0,0,0);font-size:12px" target="__blank"><span style="box-sizing:border-box">${phoneInput}</span></a></td>
        </tr>`
    }

    if (emailInput != '') {
        email = `<tr height="20" style="box-sizing:border-box;margin:0px;padding:0px;border:0px;vertical-align:middle">
            <td width="30" style="box-sizing:border-box;padding:0px;border:0px;vertical-align:middle">
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:30px;vertical-align:-webkit-baseline-middle">
                    <tbody style="box-sizing:border-box">
                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                            <td style="box-sizing:border-box;padding:0px;border:0px;vertical-align:bottom"><span color="#f2547d" width="11" style="box-sizing:border-box;display:inline-block;background-color:${colorInput}"><img src="https://ci5.googleusercontent.com/proxy/u9Dqq8IRTYcA9pxGhij8X1100IBTEBNk6GfgLex2wy5mIUGt4EvtpI__1csTElV-MUMrqJCa2SjWZkRDmYNbTv260GIk6RQb8BWD6Fub4s38olgLolJ-Y0ZMzSkDaCxhCmOgByGso4GxlMz7=s0-d-e1-ft#https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#f2547d" alt="emailAddress" width="13" style="box-sizing:border-box;border-style:none;display:block" class="CToWUd" data-bit="iit"></span></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td style="box-sizing:border-box;padding:0px;border:0px"><a href="mailto:${emailInput}" color="#000000" style="box-sizing:border-box;background-color:rgba(0,0,0,0);text-decoration-line:none;color:rgb(0,0,0);font-size:12px" target="__blank"><span style="box-sizing:border-box">${emailInput}</span></a></td>
        </tr>`
    }

    if (websiteInput != '') {
        website = `<tr height="20" style="box-sizing:border-box;margin:0px;padding:0px;border:0px;vertical-align:middle">
            <td width="30" style="box-sizing:border-box;padding:0px;border:0px;vertical-align:middle">
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:30px;vertical-align:-webkit-baseline-middle">
                    <tbody style="box-sizing:border-box">
                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                            <td style="box-sizing:border-box;padding:0px;border:0px;vertical-align:bottom"><span color="#f2547d" width="11" style="box-sizing:border-box;display:inline-block;background-color:${colorInput}"><img src="https://ci5.googleusercontent.com/proxy/bDGbdhNSZAZaKWHjXdHMW3DL3PklwLU9F5lSquHVukVuOVNDm_0LSPw8ckOtJwduaqdVOyJnATN5reUqPaX3QjUNCZkwbG2Ac8UdOzrywgI_nREPLk66UFxOhX3uiKMJOqLfWEBJyXQ51Tk=s0-d-e1-ft#https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#f2547d" alt="website" width="13" style="box-sizing:border-box;border-style:none;display:block" class="CToWUd" data-bit="iit"></span></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td style="box-sizing:border-box;padding:0px;border:0px">
                <a href="https://${websiteInput}" color="#000000" style="box-sizing:border-box;background-color:rgba(0,0,0,0);text-decoration-line:none;color:rgb(0,0,0);font-size:12px" target="__blank" <span style="box-sizing:border-box">${websiteInput}</span></a>
            </td>
        </tr>`
    }

    if (locationInput != '') {
        location = `<tr height="20" style="box-sizing:border-box;margin:0px;padding:0px;border:0px;vertical-align:middle">
            <td width="30" style="box-sizing:border-box;padding:0px;border:0px;vertical-align:middle">
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:30px;vertical-align:-webkit-baseline-middle">
                    <tbody style="box-sizing:border-box">
                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                            <td style="box-sizing:border-box;padding:0px;border:0px;vertical-align:bottom"><span color="#f2547d" width="11" style="box-sizing:border-box;display:inline-block;background-color:${colorInput}"><img src="https://ci5.googleusercontent.com/proxy/PMsX6QYblfid2-Aq_atF0w8D-5O2KEMGfclrImAJEOsQqE_sbKhMfAd7gH3akRnGu3ErEwVfaOuRfuDxpUBCSL-LKhPfwPnP1FnJHgaOjcrmV2CgMlczkQKYJb-bo0qnAEo7PcQNq51IElkIZFk=s0-d-e1-ft#https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color="#f2547d" alt="address" width="13" style="box-sizing:border-box;border-style:none;display:block" class="CToWUd" data-bit="iit"></span></td>
                        </tr>
                    </tbody>
                </table>
            </td>
            <td style="box-sizing:border-box;padding:0px;border:0px"><span color="#000000" style="box-sizing:border-box;font-size:12px;color:rgb(0,0,0)"><span style="box-sizing:border-box">${locationInput}</span></span>
            </td>
        </tr>`
    }

    return phone + email + website + location;
}


function generateSocial() {
    let facebook = '';
    let twitter = '';
    let instagram = '';
    let linkedIn = '';

    if (facebookInput != '') {
        facebook = `<td style="box-sizing:border-box;padding:0px;border:0px">
                <a href="https://${facebookInput}" color="#6a78d1" style="box-sizing:border-box;background-color:${colorInput};display:inline-block;padding:0px" target="__blank"><img src="https://ci6.googleusercontent.com/proxy/CsU8Viqi3BJDAFLrGZPksmkYgWVO33uPMuUPYTdIjlZGkYPTUoI_vJDzFKjQFwApPgNeOzuP2McTvftBr9y45oU4K7hT_3YVrqR7L-3VwYbeIS13VrCdWig_8JnKG5CZ_mBs7omd-uFCFStjfCVo=s0-d-e1-ft#https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                        alt="facebook" color="#6a78d1" height="24" style="box-sizing:border-box;border-style:none;max-width:135px;display:block" class="CToWUd" data-bit="iit"></a>
            </td>
            <td width="5" style="box-sizing:border-box;padding:0px;border:0px">
                <div style="box-sizing:border-box"></div>
            </td>`
    }

    if (twitterInput != '') {
        twitter = `<td style="box-sizing:border-box;padding:0px;border:0px">
                <a href="https://${twitterInput}" color="#6a78d1" style="box-sizing:border-box;background-color:${colorInput};display:inline-block;padding:0px" target="__blank" ><img src="https://ci5.googleusercontent.com/proxy/7hurPF5R2XfTJTr2Fqhp-g90VfcTNaZV-l9jil-wiHwtT5Ml1DQ7jOF4iK6ioEc0wAAWwT4hZgaXYPuOg4zJ5G-cClwKcyCAVyjvb3__WdNvjK_wisecltPdtxx2obIkLOEh82rck1AaTEV-FxA=s0-d-e1-ft#https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                        alt="twitter" color="#6a78d1" height="24" style="box-sizing:border-box;border-style:none;max-width:135px;display:block" class="CToWUd" data-bit="iit"></a>
            </td>
            <td width="5" style="box-sizing:border-box;padding:0px;border:0px">
                <div style="box-sizing:border-box"></div>
            </td>`
    }

    if (linkedinInput != '') {
        linkedIn = `
                    <td style="box-sizing:border-box;padding:0px;border:0px">
                <a href="https://${linkedinInput}" color="#6a78d1" style="box-sizing:border-box;background-color:${colorInput};display:inline-block;padding:0px" target="__blank"><img src="https://ci6.googleusercontent.com/proxy/8VnMNxHLCZ0mb5p6kFUeerh69ZxNFn796FO-bPB4zCIy6zKpR1zhFWOLua5F0V0VgIit8AVUmjEgifJrk7e9BwF3wOGdMevsrii7gV2oBOFEo5guBdtnCAwg1eRcW3MR-HHxsstpA8fhJPI5apj8=s0-d-e1-ft#https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                        alt="linkedin" color="#6a78d1" height="24" style="box-sizing:border-box;border-style:none;max-width:135px;display:block" class="CToWUd" data-bit="iit"></a>
            </td>
            <td width="5" style="box-sizing:border-box;padding:0px;border:0px">
                <div style="box-sizing:border-box"></div>
            </td>`
    }

    if (instagramInput != '') {
        instagram = `<td style="box-sizing:border-box;padding:0px;border:0px">
                <a href="https://${instagramInput}" color="#6a78d1" style="box-sizing:border-box;background-color:${colorInput};display:inline-block;padding:0px" target="__blank"><img src="https://ci4.googleusercontent.com/proxy/N8g6tZ7eglyo7c_6d8oDw66CnB6TXXjsEzJARvc9fD3jikHSnoEtAs2zQjlpsa6zX3aAyD6apMdrUeWhCbbT_8rbyW-AqHOjfQQWIa_UrT_KpQ4kKh1zjDP5nh-osDYyAh4XeiSmeBBT1nFHzi8PtQ=s0-d-e1-ft#https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                        alt="instagram" color="#6a78d1" height="24" style="box-sizing:border-box;border-style:none;max-width:135px;display:block" class="CToWUd" data-bit="iit"></a>
            </td>
            <td width="5" style="box-sizing:border-box;padding:0px;border:0px">
                <div style="box-sizing:border-box"></div>
            </td>`
    }
    return facebook + twitter + instagram + linkedIn
}


function generateSignature() {

    const signatureOutput = `
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:450px;color:rgb(255,255,255);font-size:medium;vertical-align:-webkit-baseline-middle;font-family:Arial">
    <tr height="50" style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
            <td style="box-sizing:border-box;padding:0px;border:0px">
                <p color="#000000" style="box-sizing:border-box;font-size:18px; font-weight: bold;line-height:22px;margin:0px;color:rgb(0,0,0)"><span style="box-sizing:border-box">${signOffInput}</span></p><table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:450px;vertical-align:-webkit-baseline-middle">
                    <tbody style="box-sizing:border-box">
                    </tbody>
                </table>
            </td>
        </tr>
    <tbody style="box-sizing:border-box">
        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
            <td style="box-sizing:border-box;padding:0px;border:0px">
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:450px;vertical-align:-webkit-baseline-middle">
                    <tbody style="box-sizing:border-box">
                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                            <td width="150" style="box-sizing:border-box;padding:0px;border:0px;vertical-align:middle"><span style="box-sizing:border-box;margin-right:20px;display:block"><img src="${imageInput}" role="presentation"  style="box-sizing:border-box;border-style:none;" class="CToWUd" data-bit="iit"></span></td>

                            <td width="30" style="box-sizing:border-box;padding:0px;border:0px">
                                <div style="box-sizing:border-box;width:30px"></div>
                            </td>
                            <td style="box-sizing:border-box;padding:0px;border:0px;vertical-align:middle">
                                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:198.125px;vertical-align:-webkit-baseline-middle">
                                    <tbody style="box-sizing:border-box;padding:0px;border:0px;vertical-align:middle">
                                        <h2 color="#000000" style="box-sizing:border-box;font-size:18px;line-height:1.38;margin:0px;color:rgb(0,0,0);font-weight:bold;letter-spacing: 0px;font-family:arial; text-transform:capitalize;"><span style="box-sizing:border-box">${nameInput}</span></h2>
                                        <p color="#000000" style="box-sizing:border-box;font-size:14px;line-height:22px;margin:0px;color:rgb(0,0,0)"><span style="box-sizing:border-box">${titleInput}</span></p>
                                        <td height="10" style="box-sizing:border-box;padding:0px;border:0px;vertical-align:middle">
                                            </td>
                                    </tbody>
                                    <tbody style="box-sizing:border-box">
                                       ${generateContactInfo()}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr height='10px' style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
        <td style="box-sizing:border-box;padding:0px;border:0px">
                <tbody style="box-sizing:border-box">
                </tbody>
            </table>
        </td>
    </tr>
        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
            <td style="box-sizing:border-box;padding:0px;border:0px">
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:450px;vertical-align:-webkit-baseline-middle">
                    <tbody style="box-sizing:border-box">

                        <p color="#000000" style="box-sizing:border-box;font-size:12px;line-height:22px;margin:0px;color:rgb(0,0,0);font-style:italic"><span style="box-sizing:border-box">${quoteLine}</span></p>

                    </tbody>
                </table>
            </td>
        </tr>
        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
            <td style="box-sizing:border-box;padding:0px;border:0px">
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:400px;vertical-align:-webkit-baseline-middle">
                    <tbody style="box-sizing:border-box">
                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                            <td height="10" style="box-sizing:border-box;padding:0px;border:0px"></td>
                        </tr>
                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                            <td color="#f2547d" width="auto" height="1" style="box-sizing:border-box;padding:0px;border-top:0px;border-right:0px;border-bottom:1px solid ${colorInput};border-left:none;width:450px;display:block"></td>
                        </tr>
                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                            <td height=20" style="box-sizing:border-box;padding:0px;border:0px"></td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        
        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
            <td style="box-sizing:border-box;padding:0px;border:0px">
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:450px;vertical-align:-webkit-baseline-middle">
                    <tbody style="box-sizing:border-box">
                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                            ${generateLogo()}
                                    
                            <td class="social-align" style="box-sizing:border-box;padding:0px;border:0px;text-align:right;vertical-align:top">
                                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;width:120px;display:inline-block;vertical-align:-webkit-baseline-middle">
                                    <tbody style="box-sizing:border-box">
                                        <tr height='4' style="box-sizing:border-box;margin:0px;padding:0px;border:0px"></tr>
                                        <tr style="box-sizing:border-box;margin:0px;padding:0px;border:0px">
                                           ${generateSocial()}
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>


      `;
    return signatureOutput;
};

/-------------------------- Preview & Publish Signature --------------------------/

function previewSignature() {
    document.getElementById("signature-container").innerHTML = generateSignature();
    if (logoInput == '') {
        let socialAlign = document.querySelectorAll('.social-align')
        socialAlign.forEach(element => {
            element.style.textAlign = 'left'
        })
    }
    document.querySelector('#signature-preview').scrollIntoView()
}

function publishSignature() {
    if (logoUrl.src == '') {
        alert('Please add a Logo');
        return
    }
    submitInfo();
    document.getElementById('popup-display').style.display = "block";
    document.getElementById("popup-code").innerHTML = generateSignature();
    if (logoInput == '') {
        let socialAlign = document.querySelectorAll('.social-align')
        socialAlign.forEach(element => {
            element.style.textAlign = 'left';
        })
    }
}
document.querySelector('#previewSignature').addEventListener('click', submitInfo);
document.querySelector('#publishSignature').addEventListener('click', publishSignature);


/-------------------------- Popup for Publish Signature --------------------------/

function closePopup() {
    document.getElementById('popup-display').style.display = "none";
}

function copyCode() {
    let range = document.createRange();
    range.selectNode(document.getElementById("popup-code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect

    let tooltip = document.getElementById("myTooltip");
    tooltip.style.opacity = "1";
}


function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.style.opacity = "0";
}

/-------------------------- Image Input --------------------------/

const portraitField = document.querySelector("#portrait-input");
const logoField = document.querySelector("#logo-input");

portraitField.addEventListener("change", getImageURL);
logoField.addEventListener("change", getImageURL);

let portraitUrl = new Image();
let logoUrl = new Image();

function getImageURL() {
    let elementLabel = this.getAttribute('data-attribute');
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        if (elementLabel == 'portrait') {
            portraitUrl.src = uploaded_image
        } else if (elementLabel == 'logo') {
            logoUrl.src = uploaded_image
        }
    });
    reader.readAsDataURL(this.files[0]);
}

// Change image Input Label file name on file upload

function uploadFile() {
    let element = this.getAttribute('data-attribute');
    document.getElementById(`${element}-name`).innerHTML = this.files[0].name;
}

let imageSubmits = document.querySelectorAll('.img-submit');
imageSubmits.forEach(element => {
    element.addEventListener('change', uploadFile)

});

/-------------------------- Draw Image to Canvas --------------------------/

function resizeImage(uploadedImage, position) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext('2d');

    let imageWidth = uploadedImage.width;
    let imageHeight = uploadedImage.height;
    let multiplier = 0;
    let maxSize = 0;

    // Find largest dimension and resize image
    if (position == "portraitSlot") {
        maxSize = 130;
        if (imageHeight >= imageWidth) {
            multiplier = imageHeight / maxSize;
        } else {
            multiplier = imageWidth / maxSize;
        }
    } else if (position == "logoSlot") {
        maxSize = 75;
        multiplier = imageHeight / maxSize;
    }

    // Set image and canvas size, maintain ratio, max dimension 130px
    imageWidth = imageWidth / multiplier;
    imageHeight = imageHeight / multiplier;

    canvas.width = imageWidth + 2;
    canvas.height = imageHeight + 2;

    // create child canvas for first render
    const oc = document.createElement('canvas');
    const octx = oc.getContext('2d');
    oc.width = canvas.width;
    oc.height = canvas.height;

    // pre filter blur and draw image on child canvas
    const steps = (oc.width / canvas.width) >> 1;
    octx.filter = `blur(${steps}px)`;
    octx.drawImage(uploadedImage, 0, 0, imageWidth, imageHeight);

    // draw child canvas on parent canvas
    ctx.drawImage(oc, 0, 0);

    const dataURI = canvas.toDataURL();

    return dataURI;
}

/-------------------------- Checkboxes --------------------------/
let checkboxes = document.querySelectorAll('.portrait-radius input')
checkboxes.forEach(element => {
    element.addEventListener('click', onlyOneCheckedBox)
})

function onlyOneCheckedBox() {
    checkboxes.forEach(element => {
        element.checked = false
    })
    this.checked = true;
}








previewSignature();