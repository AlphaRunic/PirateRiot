interface ReplicatedFirst extends Instance {
	Maps: Folder & {
		testie: Model & {
			Part: Part;
			Spawns: Folder;
		};
	};
	Assets: Folder & {
		Sounds: Folder & {
			Shoot: Sound;
			Headshot: Sound;
			Kill: Sound;
			Reload: Sound;
		};
		Animations: Folder & {
			FlintlockIdle: Animation;
			CharFire: Animation;
			CharIdle: Animation;
			FlintlockFire: Animation;
			Roll: Animation;
			something: Animation;
		};
		VFX: Folder & {
			Dust: Part & {
				Particles: ParticleEmitter;
				Smoke: ParticleEmitter;
			};
		};
		Characters: Folder & {
			Male: Model & {
				LeftLowerArm: MeshPart & {
					LeftLowerArm: WrapTarget;
					OriginalSize: Vector3Value;
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbow: Motor6D;
					AvatarPartScaleType: StringValue;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftFoot: MeshPart & {
					AvatarPartScaleType: StringValue;
					OriginalSize: Vector3Value;
					LeftAnkle: Motor6D;
					LeftFoot: WrapTarget;
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftFootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Clothing: Shirt;
				RightHand: MeshPart & {
					RightGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWrist: Motor6D;
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHand: WrapTarget;
					OriginalSize: Vector3Value;
					AvatarPartScaleType: StringValue;
				};
				HumanoidRootPart: Part & {
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
				};
				Pants: Pants;
				RightLowerLeg: MeshPart & {
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightLowerLeg: WrapTarget;
					RightKnee: Motor6D;
					AvatarPartScaleType: StringValue;
				};
				LeftUpperLeg: MeshPart & {
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftHip: Motor6D;
					AvatarPartScaleType: StringValue;
					OriginalSize: Vector3Value;
					LeftUpperLeg: WrapTarget;
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftLowerLeg: MeshPart & {
					LeftKnee: Motor6D;
					OriginalSize: Vector3Value;
					LeftLowerLeg: WrapTarget;
					AvatarPartScaleType: StringValue;
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				["Long Dreads"]: Accessory & {
					Handle: Part & {
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				LowerTorso: MeshPart & {
					WaistCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Root: Motor6D;
					LowerTorso: WrapTarget;
					OriginalSize: Vector3Value;
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Head: MeshPart & {
					HatAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					FaceFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					CustomREyeLow: Decal;
					CustomLEyeLow: Decal;
					CustomMouthSkepticTiltedL: Decal;
					Neck: Motor6D;
					HairAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Head: WrapTarget;
					AvatarPartScaleType: StringValue;
					FaceCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				FancyPants: Accessory & {
					Handle: MeshPart & {
						Pants: WrapLayer;
						WaistCenterAttachment: Attachment;
						AccessoryWeld: Weld;
						SurfaceAppearance: SurfaceAppearance;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				UpperTorso: MeshPart & {
					RightCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Waist: Motor6D;
					UpperTorso: WrapTarget;
					OriginalSize: Vector3Value;
					AvatarPartScaleType: StringValue;
					LeftCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				HairBandanaUrbanSplinterCamo: Accessory & {
					Handle: Part & {
						AccessoryWeld: Weld;
						HatAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				CollarShirt: Accessory & {
					Handle: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
						BodyFrontAttachment: Attachment;
						AccessoryWeld: Weld;
						Collar: WrapLayer;
					};
				};
				LeftUpperArm: MeshPart & {
					LeftUpperArm: WrapTarget;
					OriginalSize: Vector3Value;
					LeftShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftShoulder: Motor6D;
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
				};
				RightLowerArm: MeshPart & {
					RightLowerArm: WrapTarget;
					OriginalSize: Vector3Value;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightElbow: Motor6D;
					AvatarPartScaleType: StringValue;
				};
				LeftHand: MeshPart & {
					LeftHand: WrapTarget;
					OriginalSize: Vector3Value;
					LeftWrist: Motor6D;
					LeftGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				RightFoot: MeshPart & {
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightFootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightAnkle: Motor6D;
					RightFoot: WrapTarget;
					AvatarPartScaleType: StringValue;
				};
				RightUpperArm: MeshPart & {
					RightShoulder: Motor6D;
					RightUpperArm: WrapTarget;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
				};
				Humanoid: Humanoid & {
					BodyDepthScale: NumberValue;
					BodyHeightScale: NumberValue;
					BodyTypeScale: NumberValue;
					BodyProportionScale: NumberValue;
					Animator: Animator;
					BodyWidthScale: NumberValue;
					HumanoidDescription: HumanoidDescription;
					HeadScale: NumberValue;
				};
				RightUpperLeg: MeshPart & {
					OriginalSize: Vector3Value;
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHip: Motor6D;
					RightUpperLeg: WrapTarget;
					AvatarPartScaleType: StringValue;
				};
				["Body Colors"]: BodyColors;
			};
			Female: Model & {
				LeftLowerArm: MeshPart & {
					LeftLowerArm: WrapTarget;
					OriginalSize: Vector3Value;
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbow: Motor6D;
					AvatarPartScaleType: StringValue;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftFoot: MeshPart & {
					AvatarPartScaleType: StringValue;
					OriginalSize: Vector3Value;
					LeftAnkle: Motor6D;
					LeftFoot: WrapTarget;
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftFootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Clothing: Shirt;
				RightHand: MeshPart & {
					RightGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWrist: Motor6D;
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHand: WrapTarget;
					OriginalSize: Vector3Value;
					AvatarPartScaleType: StringValue;
				};
				HumanoidRootPart: Part & {
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
				};
				Pants: Pants;
				RightLowerLeg: MeshPart & {
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightLowerLeg: WrapTarget;
					RightKnee: Motor6D;
					AvatarPartScaleType: StringValue;
				};
				LeftUpperLeg: MeshPart & {
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftHip: Motor6D;
					AvatarPartScaleType: StringValue;
					OriginalSize: Vector3Value;
					LeftUpperLeg: WrapTarget;
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftLowerLeg: MeshPart & {
					LeftKnee: Motor6D;
					OriginalSize: Vector3Value;
					LeftLowerLeg: WrapTarget;
					AvatarPartScaleType: StringValue;
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LowerTorso: MeshPart & {
					WaistCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Root: Motor6D;
					LowerTorso: WrapTarget;
					OriginalSize: Vector3Value;
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Head: MeshPart & {
					HatAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					FaceFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					CustomLEyeHalf: Decal;
					CustomREyeHalf: Decal;
					CustomMouthSkepticTiltedR: Decal;
					Neck: Motor6D;
					HairAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Head: WrapTarget;
					AvatarPartScaleType: StringValue;
					FaceCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				UpperTorso: MeshPart & {
					RightCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Waist: Motor6D;
					UpperTorso: WrapTarget;
					OriginalSize: Vector3Value;
					AvatarPartScaleType: StringValue;
					LeftCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				["Body Colors"]: BodyColors;
				blouse1: Accessory & {
					Handle: MeshPart & {
						BodyFrontAttachment: Attachment;
						blouse1: WrapLayer;
						AccessoryWeld: Weld;
						SurfaceAppearance: SurfaceAppearance;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				LeftUpperArm: MeshPart & {
					LeftUpperArm: WrapTarget;
					OriginalSize: Vector3Value;
					LeftShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftShoulder: Motor6D;
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
				};
				RightLowerArm: MeshPart & {
					RightLowerArm: WrapTarget;
					OriginalSize: Vector3Value;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightElbow: Motor6D;
					AvatarPartScaleType: StringValue;
				};
				LeftHand: MeshPart & {
					LeftHand: WrapTarget;
					OriginalSize: Vector3Value;
					LeftWrist: Motor6D;
					LeftGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				RightFoot: MeshPart & {
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightFootAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightAnkle: Motor6D;
					RightFoot: WrapTarget;
					AvatarPartScaleType: StringValue;
				};
				RightUpperArm: MeshPart & {
					RightShoulder: Motor6D;
					RightUpperArm: WrapTarget;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					AvatarPartScaleType: StringValue;
				};
				Humanoid: Humanoid & {
					BodyDepthScale: NumberValue;
					BodyHeightScale: NumberValue;
					BodyTypeScale: NumberValue;
					BodyProportionScale: NumberValue;
					Animator: Animator;
					BodyWidthScale: NumberValue;
					HumanoidDescription: HumanoidDescription;
					HeadScale: NumberValue;
				};
				RightUpperLeg: MeshPart & {
					OriginalSize: Vector3Value;
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHip: Motor6D;
					RightUpperLeg: WrapTarget;
					AvatarPartScaleType: StringValue;
				};
				["Bandana Hair"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
			};
		};
		Crosshair: ScreenGui & {
			Box: Frame & {
				UIScale: UIScale;
				B: Frame & {
					UIGradient: UIGradient;
				};
				R: Frame & {
					UIGradient: UIGradient;
				};
				T: Frame & {
					UIGradient: UIGradient;
				};
				UIAspectRatioConstraint: UIAspectRatioConstraint;
				L: Frame & {
					UIGradient: UIGradient;
				};
			};
		};
		Flintlock: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			Trigger: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			Muzzle: Part & {
				Attachment: Attachment;
			};
			Base2: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			Flint: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			Handle: Part;
			Frizzen: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
			Base: MeshPart & {
				Muzzle: Weld;
				Handle: Weld;
				Flint: Motor6D;
				SurfaceAppearance: SurfaceAppearance;
				Trigger: Motor6D;
				Wand: Motor6D;
				Frizzen: Motor6D;
			};
			Wand: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
			};
		};
	};
}
