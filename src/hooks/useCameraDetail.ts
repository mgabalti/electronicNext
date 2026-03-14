"use client";
import { useState, useEffect } from 'react';
import { fetchCameraDetail } from '@/core/services/cameras.service';
import { CameraDetail } from '@/core/types/Product-detail.types';

interface UseCameraDetailResult {
    camera: CameraDetail | null;
    loading: boolean;
    error: boolean;
}

export function useCameraDetail(slug: string): UseCameraDetailResult {
    const [camera, setCamera] = useState<CameraDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!slug) return;
        let active = true;

        fetchCameraDetail(slug)
            .then(data => {
                if (!active) return;
                setCamera(data);
                setLoading(false);
            })
            .catch(err => {
                if (!active) return;
                console.error('[useCameraDetail]:', err);
                setError(true);
                setLoading(false);
            });

        return () => { active = false; };
    }, [slug]);

    return { camera, loading, error };
}
