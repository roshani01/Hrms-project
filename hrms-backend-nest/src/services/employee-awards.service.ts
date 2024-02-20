// employee-awards.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeAwardsService {
  private employeeAwardsData: Record<string, any[]> = {}; // Store awards data here

  getAllEmployeesWithAwards() {
    const employeesWithAwards: Record<string, any[]> = {};

    for (const employeeId in this.employeeAwardsData) {
      if (this.employeeAwardsData.hasOwnProperty(employeeId)) {
        const awards = this.employeeAwardsData[employeeId];
        if (awards.length > 0) {
          employeesWithAwards[employeeId] = awards;
        }
      }
    }

    return employeesWithAwards;
  }

  getAwardsByEmployeeId(employeeId: string) {
    return this.employeeAwardsData[employeeId] || [];
  }

  addAwardToEmployee(employeeId: string, awardData: any) {
    if (!this.employeeAwardsData[employeeId]) {
      this.employeeAwardsData[employeeId] = [];
    }
    this.employeeAwardsData[employeeId].push(awardData);
    return { message: 'Award added successfully' };
  }

  updateEmployeeAwards(employeeId: string, newAwards: any[]) {
    this.employeeAwardsData[employeeId] = newAwards;
  }

  removeAwardFromEmployee(employeeId: string, awardId: string) {
    const awards = this.employeeAwardsData[employeeId] || [];
    const updatedAwards = awards.filter((award) => award.id !== awardId);
    this.employeeAwardsData[employeeId] = updatedAwards;
    return { message: 'Award removed successfully' };
  }
}
