import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [month, setMonth] = useState("month");
  const [year, setYear] = useState("year");
  const [dateStr, setDateStr] = useState("");

  const Calendar = () => {
    const month_olypic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //正常年份12个月对应的天数
    const month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //闰年中12个月对应的天数
    const month_name = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]; //定义要显示的月份数组
    const my_date = new Date(); //获取当天的年月日
    const my_year = my_date.getFullYear(); //获取年份
    const my_month = my_date.getMonth(); //获取月份，下标从0开始
    const my_day = my_date.getDate(); //获取当前日期

    //根据年月获取当月第一天是周几
    function dayStart(month, year) {
      const tmpDate = new Date(year, month, 1);
      return tmpDate.getDay();
    }
    //根据年份判断某月有多少天，主要是区分闰年
    function daysMonth(month, year) {
      const tmp1 = year % 4;
      const tmp2 = year % 100;
      const tmp3 = year % 400;

      if ((tmp1 === 0 && tmp2 !== 0) || tmp3 === 0) {
        return month_olypic[month]; //闰年
      } else {
        return month_normal[month]; //非闰年
      }
    }
    function refreshDate() {
      var str = "";
      //计算当月的天数和每月第一天都是周几
      const totalDay = daysMonth(my_month, my_year);
      const firstDay = dayStart(my_month, my_year);
      //添加每个月前面的空白部分，即若某个月的第一天是从周三开始，则前面的周一，周二需要空出来
      for (var i = 0; i < firstDay; i++) {
        str += "<li></li>";
      }

      //从一号开始添加到totalDay（每个月的总天数），并为pre，next和当天添加样式
      var myclass;
      for (var j = 1; j <= totalDay; j++) {
        //如果是已经过去的日期，则用浅灰色显示
        if (
          my_year < my_date.getFullYear() ||
          (my_year === my_date.getFullYear() &&
            my_month < my_date.getMonth()) ||
          (my_year === my_date.getFullYear() &&
            my_month === my_date.getMonth() &&
            j < my_day)
        ) {
          myclass = " class='lightgrey'";
        }
        //如果正好是今天，则用绿色显示
        else if (
          my_year === my_date.getFullYear() &&
          my_month === my_date.getMonth() &&
          j === my_day
        ) {
          myclass = "class = 'green greenbox'";
        }
        //将来的日期用深灰色显示
        else {
          myclass = "class = 'darkgrey'";
        }
        str += "<li " + myclass + ">" + j + "</li>";
      }
      setDateStr(str);
      setYear(my_year);
      setMonth(month_name[my_month]);
    }
    refreshDate();
  };

  useEffect(() => {
    Calendar();
  }, [month, year, dateStr]);

  return (
    <AppContext.Provider value={{ dateStr, month, year }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
