const appLeav = (
  userEmail,
  userName,
  leaveType,
  fromDate,
  toDate,
  subject,
  description
) =>
  `<div class="columns-wrap_20a-P" style="background-color: rgb(114, 5, 164); border-width: 0px; padding: 50px 20px;"><div class="inner-column_2kyJF" style="margin: 0px 50px;"><div tabindex="-1" class="drop-area drop-area_2BchA drop-forbidden_1Hjfp"><section class="dropzone dropzone_31DoJ" role="hidden" data-role="module-dropzone" style="align-items: center; display: flex; flex-wrap: wrap; font-size: 14px; justify-content: center;"><div><div class="dropzone-column-content_bZrBc"></div></div></section></div><div class="module-wrapper"><div class="module_p3Q6S module no-frame_10FvP" tabindex="0" data-role="text-module" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63"><div class="nested-module-controls_XHQIx"><div class="nested-module-controls-left_2wwU4"><div tabindex="-1" data-role="move" class="module-control_3tr60" draggable="true"><span class="icon-container icon-container_2JZDY"><i class="sg-icon sg-icon-drag sg-icon_3W7YJ sg-icon-drag_3ht3X" tabindex="-1"></i></span></div></div><div class="nested-module-controls-right_2Ohny"><div class="nested-module-controls-menu_1WvnP"><div class="module-controls-menu-trigger_ljunr"><span class="icon-container icon-container_2JZDY"><i class="module-control-icon_lu1RF sg-icon sg-icon-ellipsis-vertical sg-icon_3W7YJ sg-icon-ellipsis-vertical_3MzD1" tabindex="-1"></i></span></div><div class="module-actions_-EVjq"><div data-role="code" class="module-control module-control_3tr60"><span data-tooltip="Edit Module HTML" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-code sg-icon_3W7YJ sg-icon-code_3raq-" tabindex="-1" data-role="edit-module-html"></i></span></span></div><div data-role="copy" class="module-control module-control_3tr60"><span data-tooltip="Duplicate" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-copy sg-icon_3W7YJ sg-icon-copy_3mJ4F" tabindex="-1"></i></span></span></div><div data-role="delete" class="module-control module-control_3tr60"><span data-tooltip="Delete" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-trash sg-icon_3W7YJ sg-icon-trash_Ormn3" tabindex="-1"></i></span></span></div></div></div></div></div><div class="module-children_qBvFb"><div class="reset"><!--[if (gte mso 9)|(IE)]>
  <center>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      style="border-spacing:0;border-collapse:collapse;table-layout: fixed;"
    >
      <tr>
        <td width="undefined.000px" valign="top" style="padding: 0px 0px 0px 0px;border-collapse: collapse;" >
<![endif]--><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:40px 0px 30px 0px; line-height:0px; text-align:inherit; background-color:#1481ad;" height="100%" valign="top" bgcolor="#1481ad" role="module-content"><div><div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="font-size: 40px; color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif"><strong>Leave</strong></span></div><div></div></div></td>
    </tr>
  </tbody>
</table><!--[if (gte mso 9)|(IE)]>
        </td>
      <tr>
    </table>
  </center>
<![endif]--></div><div class="frame_3gduo gray-frame_1U_69"></div></div></div></div><div tabindex="-1" class="drop-area drop-area_2BchA drop-forbidden_1Hjfp"><section class="dropzone dropzone_31DoJ" role="hidden" data-role="module-dropzone" style="align-items: center; display: flex; flex-wrap: wrap; font-size: 14px; justify-content: center;"><div><div class="dropzone-column-content_bZrBc"></div></div></section></div><div class="module-wrapper"><div class="module_p3Q6S module no-frame_10FvP" tabindex="0" data-role="text-module" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2"><div class="nested-module-controls_XHQIx"><div class="nested-module-controls-left_2wwU4"><div tabindex="-1" data-role="move" class="module-control_3tr60" draggable="true"><span class="icon-container icon-container_2JZDY"><i class="sg-icon sg-icon-drag sg-icon_3W7YJ sg-icon-drag_3ht3X" tabindex="-1"></i></span></div></div><div class="nested-module-controls-right_2Ohny"><div class="nested-module-controls-menu_1WvnP"><div class="module-controls-menu-trigger_ljunr"><span class="icon-container icon-container_2JZDY"><i class="module-control-icon_lu1RF sg-icon sg-icon-ellipsis-vertical sg-icon_3W7YJ sg-icon-ellipsis-vertical_3MzD1" tabindex="-1"></i></span></div><div class="module-actions_-EVjq"><div data-role="code" class="module-control module-control_3tr60"><span data-tooltip="Edit Module HTML" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-code sg-icon_3W7YJ sg-icon-code_3raq-" tabindex="-1" data-role="edit-module-html"></i></span></span></div><div data-role="copy" class="module-control module-control_3tr60"><span data-tooltip="Duplicate" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-copy sg-icon_3W7YJ sg-icon-copy_3mJ4F" tabindex="-1"></i></span></span></div><div data-role="delete" class="module-control module-control_3tr60"><span data-tooltip="Delete" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-trash sg-icon_3W7YJ sg-icon-trash_Ormn3" tabindex="-1"></i></span></span></div></div></div></div></div><div class="module-children_qBvFb"><div class="reset"><!--[if (gte mso 9)|(IE)]>
  <center>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      style="border-spacing:0;border-collapse:collapse;table-layout: fixed;"
    >
      <tr>
        <td width="undefined.000px" valign="top" style="padding: 0px 0px 0px 0px;border-collapse: collapse;" >
<![endif]--><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:50px 30px 30px 30px; line-height:28px; text-align:inherit; background-color:#7205a4;" height="100%" valign="top" bgcolor="#7205a4" role="module-content"><div>
      <div style="font-family: inherit; text-align: justify"><span style="color: #ffffff">Leave from:- ${userName}</span></div>
      <div style="font-family: inherit; text-align: justify"><span style="color: #ffffff">Type of Leave:- ${leaveType}</span></div>
<div style="font-family: inherit; text-align: left"><span style="color: #ffffff">To Date:- ${toDate}&nbsp;&nbsp;From Date:- ${fromDate}</span></div>
<div style="font-family: inherit; text-align: left"><span style="color: #ffffff">Subject:- ${subject}</span></div>
<div style="font-family: inherit; text-align: justify"><span style="color: #ffffff">Description:- ${description}</span></div><div></div></div></td>
    </tr>
  </tbody>
</table><!--[if (gte mso 9)|(IE)]>
        </td>
      <tr>
    </table>
  </center>
<![endif]--></div><div class="frame_3gduo gray-frame_1U_69"></div></div></div></div><div tabindex="-1" class="drop-area drop-area_2BchA drop-forbidden_1Hjfp"><section class="dropzone dropzone_31DoJ" role="hidden" data-role="module-dropzone" style="align-items: center; display: flex; flex-wrap: wrap; font-size: 14px; justify-content: center;"><div><div class="dropzone-column-content_bZrBc"></div></div></section></div><div class="module-wrapper"><div class="module_p3Q6S module no-frame_10FvP" tabindex="0" data-role="button-module" data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90"><div class="nested-module-controls_XHQIx"><div class="nested-module-controls-left_2wwU4"><div tabindex="-1" data-role="move" class="module-control_3tr60" draggable="true"><span class="icon-container icon-container_2JZDY"><i class="sg-icon sg-icon-drag sg-icon_3W7YJ sg-icon-drag_3ht3X" tabindex="-1"></i></span></div></div><div class="nested-module-controls-right_2Ohny"><div class="nested-module-controls-menu_1WvnP"><div class="module-controls-menu-trigger_ljunr"><span class="icon-container icon-container_2JZDY"><i class="module-control-icon_lu1RF sg-icon sg-icon-ellipsis-vertical sg-icon_3W7YJ sg-icon-ellipsis-vertical_3MzD1" tabindex="-1"></i></span></div><div class="module-actions_-EVjq"><div data-role="code" class="module-control module-control_3tr60"><span data-tooltip="Edit Module HTML" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-code sg-icon_3W7YJ sg-icon-code_3raq-" tabindex="-1" data-role="edit-module-html"></i></span></span></div><div data-role="copy" class="module-control module-control_3tr60"><span data-tooltip="Duplicate" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-copy sg-icon_3W7YJ sg-icon-copy_3mJ4F" tabindex="-1"></i></span></span></div><div data-role="delete" class="module-control module-control_3tr60"><span data-tooltip="Delete" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-trash sg-icon_3W7YJ sg-icon-trash_Ormn3" tabindex="-1"></i></span></span></div></div></div></div></div><div class="module-children_qBvFb"><div class="reset"><!--[if (gte mso 9)|(IE)]>
  <center>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      style="border-spacing:0;border-collapse:collapse;table-layout: fixed;"
    >
      <tr>
        <td width="undefined.000px" valign="top" style="padding: 0px 0px 0px 0px;border-collapse: collapse;" >
<![endif]--><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90">
    <tbody>
      <tr>
        <td align="left" bgcolor="#7205A4" class="outer-td" style="padding:5px 0px 5px 30px; background-color:#7205A4;">
          <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            <tbody>
              <tr>
              <td align="center" bgcolor="#008000" class="inner-td" style="border-radius:6px; font-size:16px; text-align:left; background-color:inherit;">
                <a href="" style="background-color:#008000; border:1px solid #fffff; border-color:#fffff; border-radius:10px; border-width:1px; color:#ffffff; display:inline-block; font-size:16px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:15px 25px 15px 25px; text-align:center; text-decoration:none; border-style:solid; font-family:trebuchet ms,helvetica,sans-serif;" target="_blank">ACCEPT</a>
              </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><!--[if (gte mso 9)|(IE)]>
        </td>
      <tr>
    </table>
  </center>
<![endif]--></div><div class="frame_3gduo gray-frame_1U_69"></div></div></div></div><div tabindex="-1" class="drop-area drop-area_2BchA drop-forbidden_1Hjfp"><section class="dropzone dropzone_31DoJ" role="hidden" data-role="module-dropzone" style="align-items: center; display: flex; flex-wrap: wrap; font-size: 14px; justify-content: center;"><div><div class="dropzone-column-content_bZrBc"></div></div></section></div><div class="module-wrapper"><div class="module_p3Q6S module no-frame_10FvP" tabindex="0" data-role="button-module" data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90.1"><div class="nested-module-controls_XHQIx"><div class="nested-module-controls-left_2wwU4"><div tabindex="-1" data-role="move" class="module-control_3tr60" draggable="true"><span class="icon-container icon-container_2JZDY"><i class="sg-icon sg-icon-drag sg-icon_3W7YJ sg-icon-drag_3ht3X" tabindex="-1"></i></span></div></div><div class="nested-module-controls-right_2Ohny"><div class="nested-module-controls-menu_1WvnP"><div class="module-controls-menu-trigger_ljunr"><span class="icon-container icon-container_2JZDY"><i class="module-control-icon_lu1RF sg-icon sg-icon-ellipsis-vertical sg-icon_3W7YJ sg-icon-ellipsis-vertical_3MzD1" tabindex="-1"></i></span></div><div class="module-actions_-EVjq"><div data-role="code" class="module-control module-control_3tr60"><span data-tooltip="Edit Module HTML" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-code sg-icon_3W7YJ sg-icon-code_3raq-" tabindex="-1" data-role="edit-module-html"></i></span></span></div><div data-role="copy" class="module-control module-control_3tr60"><span data-tooltip="Duplicate" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-copy sg-icon_3W7YJ sg-icon-copy_3mJ4F" tabindex="-1"></i></span></span></div><div data-role="delete" class="module-control module-control_3tr60"><span data-tooltip="Delete" data-tooltip-pos="left"><span class="icon-container icon-container_2JZDY" role="button" tabindex="0"><i class="module-control-icon_lu1RF sg-icon sg-icon-trash sg-icon_3W7YJ sg-icon-trash_Ormn3" tabindex="-1"></i></span></span></div></div></div></div></div><div class="module-children_qBvFb"><div class="reset"><!--[if (gte mso 9)|(IE)]>
  <center>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      width="100%"
      style="border-spacing:0;border-collapse:collapse;table-layout: fixed;"
    >
      <tr>
        <td width="undefined.000px" valign="top" style="padding: 0px 0px 0px 0px;border-collapse: collapse;" >
<![endif]--><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90.1">
    <tbody>
      <tr>
        <td align="left" bgcolor="#7205A4" class="outer-td" style="padding:5px 0px 5px 30px; background-color:#7205A4;">
          <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            <tbody>
              <tr>
              <td align="center" bgcolor="#d72117" class="inner-td" style="border-radius:6px; font-size:16px; text-align:left; background-color:inherit;">
                <a href="" style="background-color:#d72117; border:1px solid #fffff; border-color:#fffff; border-radius:10px; border-width:1px; color:#ffffff; display:inline-block; font-size:16px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:15px 25px 15px 25px; text-align:center; text-decoration:none; border-style:solid; font-family:trebuchet ms,helvetica,sans-serif;" target="_blank">REJECT</a>
              </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><!--[if (gte mso 9)|(IE)]>
        </td>
      <tr>
    </table>
  </center>
<![endif]--></div><div class="frame_3gduo gray-frame_1U_69"></div></div></div></div><div tabindex="-1" class="drop-area drop-area_2BchA drop-forbidden_1Hjfp"><section class="dropzone dropzone_31DoJ" role="hidden" data-role="module-dropzone" style="align-items: center; display: flex; flex-wrap: wrap; font-size: 14px; justify-content: center;"><div><div class="dropzone-column-content_bZrBc"></div></div></section></div></div></div>`;

module.exports = appLeav;
