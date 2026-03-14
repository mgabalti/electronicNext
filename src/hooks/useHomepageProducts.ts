"use client";
import { useState, useEffect } from 'react';
import { fetchHomepageProducts, HomepageProduct } from '@/core/services/cameras.service';

interface UseHomepageProductsResult {
    products: HomepageProduct[];
    brands: string[];
    loading: boolean;
    error: boolean;
}

export function useHomepageProducts(): UseHomepageProductsResult {
    const [products, setProducts] = useState<HomepageProduct[]>([]);
    const [brands, setBrands] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let active = true;

        fetchHomepageProducts()
            .then(data => {
                if (!active) return;
                setProducts(data.products);
                setBrands(data.brands);
                setLoading(false);
            })
            .catch(err => {
                if (!active) return;
                console.error('[useHomepageProducts]:', err);
                setError(true);
                setLoading(false);
            });

        return () => { active = false; };
    }, []);

    return { products, brands, loading, error };
}
