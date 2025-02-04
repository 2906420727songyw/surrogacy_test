import http from '@/app/http';

function getInformation() {
    return http.get('information');
}

function getComponent() {
    return http.get('comments');
}

export default {
    getInformation,
    getComponent,
} as const;
