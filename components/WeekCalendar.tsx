import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from './Icon';

interface DayData {
  day: string;
  date: number;
  isCompleted: boolean;
  isToday: boolean;
}

interface WeekCalendarProps {
  weekData: DayData[];
}

export const WeekCalendar: React.FC<WeekCalendarProps> = ({ weekData }) => {
  return (
    <View className="flex-row items-center justify-between my-4">
      {weekData.map((dayInfo, index) => (
        <View key={index} className="flex-1 items-center">
          <View className={`flex-col items-center justify-center px-2 py-3 gap-2 ${
            dayInfo.isToday ? 'bg-slate-200 rounded-[100px]' : ''
          }`}>
            <Text className={`font-medium text-sm ${
              dayInfo.isToday ? 'text-slate-950' : 'text-slate-500'
            }`}>
              {dayInfo.day}
            </Text>
            
            {dayInfo.isCompleted ? (
              <View className="w-5 h-5 items-center justify-center">
                <Icon name="checkmark" size={16} color="#09090b" />
              </View>
            ) : (
              <Text className={`font-semibold text-base ${
                dayInfo.isToday ? 'text-slate-950' : 'text-slate-300'
              }`}>
                {dayInfo.date}
              </Text>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};