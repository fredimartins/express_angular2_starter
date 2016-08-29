/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TopComponent } from './top.component';

describe('Component: Top', () => {
  it('should create an instance', () => {
    let component = new TopComponent();
    expect(component).toBeTruthy();
  });
});
