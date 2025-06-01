import { MainCard } from "@/components/local/MainCard";
import { Card } from "@/components/ui/card";
import { ChartBarLabel } from "@/components/ui/chart-bar-label";
import {  ChartLineDefault } from "@/components/ui/chart-line-default";


export default function userDashboard(){
    return (
        <div className="w-full min-h-screen flex flex-col px-2 py-3">
            <header className="flex gap-3">
                <MainCard/>
                <MainCard/>
                <MainCard/>
                <MainCard/>
            </header>
            <ChartBarLabel/>
            <ChartLineDefault/>
        </div>
    )
}