import AxiosClient from '@/apis/AxiosClient';

export const appService = {
    getCountNoti: async () => {
        return AxiosClient.get('/notification/count-noti');
    },
};

export const selectAll = {
    label: 'Tất cả',
    value: '',
};
