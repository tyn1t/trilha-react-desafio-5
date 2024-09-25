import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://fbjbsdmosyscyevvqdmx.supabase.co/rest/v1',
    headers: {
        apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiamJzZG1vc3lzY3lldnZxZG14Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzIyMTk0MSwiZXhwIjoyMDQyNzk3OTQxfQ.0yxMEhJ_k8kCsZleDLKDwzyMjT52_opcjfFLY3VB0Ic',
        authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiamJzZG1vc3lzY3lldnZxZG14Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzIyMTk0MSwiZXhwIjoyMDQyNzk3OTQxfQ.0yxMEhJ_k8kCsZleDLKDwzyMjT52_opcjfFLY3VB0Ic'
    }
})