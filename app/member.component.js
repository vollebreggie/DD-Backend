"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var member_1 = require('./member');
var MemberComponent = (function () {
    function MemberComponent() {
        this.delete = new core_1.EventEmitter();
    }
    MemberComponent.prototype.onDelete = function () {
        this.delete.emit(this.model);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', member_1.member)
    ], MemberComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output('deleted'), 
        __metadata('design:type', Object)
    ], MemberComponent.prototype, "delete", void 0);
    MemberComponent = __decorate([
        core_1.Component({
            selector: "member-item",
            templateUrl: "app/member.component.html",
            styleUrls: ["app/member.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
