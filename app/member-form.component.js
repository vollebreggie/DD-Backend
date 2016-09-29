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
var member_service_1 = require('./member.service');
var MemberFormComponent = (function () {
    function MemberFormComponent(memberService) {
        this.memberService = memberService;
    }
    MemberFormComponent.prototype.Create = function (event) {
        this.Member = new member_1.member(1, "henk");
        this.memberService.addMember(this.Member).subscribe();
    };
    MemberFormComponent.prototype.Update = function (event) {
        this.Member = new member_1.member(1, "henk");
        this.memberService.UpdateMember(this.Member).subscribe();
    };
    MemberFormComponent = __decorate([
        core_1.Component({
            selector: "member-form",
            providers: [member_service_1.MemberService],
            templateUrl: "app/member-form.component.html",
            styleUrls: ["app/form.css"]
        }), 
        __metadata('design:paramtypes', [member_service_1.MemberService])
    ], MemberFormComponent);
    return MemberFormComponent;
}());
exports.MemberFormComponent = MemberFormComponent;
