var data = [
  ["B970F58B-D8E4-CA02-A934-8737E462C606", "【插入表】免收取人员丢失处罚的人员(补插入)——2017.12.29(暂停)", "57 11 14 * * ?"],
  ["4330A81D-5B4A-46B8-A5B4-F6B6C2515D04", "单个产品型号停用标识修改", "00 00 09 * * ?"]
]
var xml = "";
data.forEach(function (item) {
  xml += "<job>";
  xml += "   <job-detail>";
  xml += "   <name>" + item[0] + "_job</name>";
  xml += "   <group>DEFAULT_REPORT</group>";
  xml += "   <job-class>com.fdauto.smart.core.service.data.model.fdreport.schedule.job.ReportScheduleJob</job-class>";
  xml += '   <job-data-map allows-transient-data="true">';
  xml += '      <entry>';
  xml += '          <key>FGUID</key> ';
  xml += '          <value>' + item[0] + '</value>';
  xml += '          </entry>';
  xml += '      <entry>';
  xml += '          <key>isHolidayNotExec</key>';
  xml += '          <value>false</value>';
  xml += '      </entry>';
  xml += '      <entry>';
  xml += '          <key>TITLE</key>';
  xml += '          <value>' + item[1] + '</value>';
  xml += '      </entry>';
  xml += '      <entry>';
  xml += '          <key>execOnce</key>';
  xml += '          <value>false</value>';
  xml += '      </entry>';
  xml += '   </job-data-map> ';
  xml += '   </job-detail>  ';
  xml += '   <trigger>   ';
  xml += '      <cron>   ';
  xml += '          <name>' + item[0] + '_trigger</name>';
  xml += '          <group>DEFAULT_REPORT</group>   ';
  xml += '          <job-name>' + item[0] + '_job</job-name>';
  xml += '          <job-group>DEFAULT_REPORT</job-group>';
  xml += '          <cron-expression>'+ item[2] +'</cron-expression>';
  xml += '      </cron>   ';
  xml += '    </trigger>    ';
  xml += '</job>';
})
console.log(xml)
