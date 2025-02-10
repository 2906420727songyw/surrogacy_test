import http from '@/app/http';

function getInformation() {
    return http.get('information');
}

function getComponent() {
    return http.get('comments');
}

function getInformationById(id: string) {
    return http.get(`information/${id}`);
}

export default {
    getInformation,
    getComponent,
    getInformationById,
} as const;
