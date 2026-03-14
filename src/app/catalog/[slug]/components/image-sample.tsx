"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SampleGallery } from "@/core/types/Product-detail.types";
import Image from "next/image";
import { removeTsPrefix } from "@/core/services/cameras.service";


const ImageSample = ({ data }: { data: SampleGallery[] }) => {

    return (
        <>

            <div className="space-y-6">
                {data.length === 0 ? (
                    <p className="text-sm text-gray-400 italic">No sample galleries available.</p>
                ) : data.map(gallery => (
                    <div key={gallery.id}>
                        <div className="flex items-baseline justify-between mb-2">
                            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{gallery.title}</h3>
                            <span className="text-xs text-gray-400 dark:text-gray-500">{gallery.postedDate} · {gallery.imageCount} images</span>
                        </div>
                        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1">
                            {gallery.images.slice(0, 10).map(img => (
                                <a
                                    key={img.id}
                                    href={gallery.galleryLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="aspect-square relative block overflow-hidden rounded bg-gray-100 dark:bg-gray-800 hover:opacity-80 transition-opacity"
                                >
                                    <Image
                                        src={removeTsPrefix(img.url)}
                                        alt=""
                                        fill
                                        unoptimized
                                        sizes="60px"
                                        className="object-cover"
                                    />

                                </a>
                            ))}
                            {gallery.imageCount > 10 && (
                                <a
                                    href={gallery.galleryLink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="aspect-square flex items-center justify-center rounded bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    +{gallery.imageCount - 10}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ImageSample;

