'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const RecentActivity = () => {
    const activities = [
        {
            icon: 'dangerous',
            color: 'red',
            text: 'Critical vulnerability detected in',
            link: 'E-commerce Platform',
            time: '2h ago',
        },
        {
            icon: 'task_alt',
            color: 'green',
            text: 'Scan on',
            link: 'Admin Dashboard',
            time: '8h ago',
        },
        {
            icon: 'priority_high',
            color: 'orange',
            text: 'New high vulnerability found on',
            link: 'Corporate API',
            time: '1d ago',
        },
        {
            icon: 'add_circle',
            color: 'blue',
            text: 'New project created:',
            link: 'Internal Tools',
            time: '2d ago',
        },
    ];

    return (
        <div>
            <h2 className="text-text-primary text-xl font-bold mb-4 px-1">Recent Activity</h2>
            <div className="flow-root">
                <ul className="-mb-8" role="list">
                    {activities.map((activity, index) => (
                        <li key={index}>
                            <div className="relative pb-8">
                                {index !== activities.length - 1 && (
                                    <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-white/10"></span>
                                )}
                                <div className="relative flex space-x-3">
                                    <div>
                                        <span className={`h-8 w-8 rounded-full bg-${activity.color}-500/20 flex items-center justify-center ring-4 ring-[#0B0D12]`}>
                                            <span className={`material-symbols-outlined text-${activity.color}-400 text-base`}>{activity.icon}</span>
                                        </span>
                                    </div>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                        <div>
                                            <p className="text-sm text-text-secondary">{activity.text} <Link href="#" className="font-medium text-primary hover:underline">{activity.link}</Link></p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-sm text-text-secondary/70">
                                            <time>{activity.time}</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecentActivity;
