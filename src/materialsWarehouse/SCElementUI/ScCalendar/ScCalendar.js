import {generalTemplate} from "../../../utils/ecTemplate";
export const ScCalendar = {
    component:{
        component: "ScCalendar",
        label: 'ScCalendar',
        events: {},
        attributes: {},
        styles: {display:"inline-flex"},
        shapeStyles:{

        }
    },
    setter:{
        component: "ScCalendar",
        setter: {
            attributes: [

                    {
                    attributeName: "modelValue",
                    label: "value绑定",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    detail:"绑定值",
                    bind:'value',
                    },
                    {
                    attributeName: "range-bindValue",
                    label: "range",
                    type: "input",
                    value: "",
                    defaultValue: "",
                    bind:'value',
                    detail:"时间范围，包括开始时间与结束时间。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。array [Data.Data]",
                    },
            ],
            events:[],
            styles: {}
        }
    },
    template: (param)=>{
        return `
        <el-calendar
            ${generalTemplate(param)}
        >
        </el-calendar>
        `
    }
}
