import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeUk from 'air-datepicker/locale/uk';

const airDatepicker = () => {
    new AirDatepicker('.input--date',{
        locale: localeUk,
        range: true,
        multipleDatesSeparator: ' - ',
        position: 'bottom center',
        buttons: ['clear'],
        // isMobile: true,
        autoClose: true,
        timepicker: false,
        minHours: 9,
        maxHours: 18,
        minutesStep: 5,
    });
}

export default airDatepicker;
